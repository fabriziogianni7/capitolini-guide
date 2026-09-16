/* ============================================================
   Musei Capitolini · Guida alla visita — logica dell'app
   Vanilla JS, routing via hash, stato in localStorage.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Stato ---------- */
  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };
  let lang = LS.get("lang", (navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en");
  const seen = new Set(LS.get("seen", []));
  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.it[k] || k;
  const byId = (id) => WORKS.find((w) => w.id === id);

  const view = document.getElementById("view");
  const toastEl = document.getElementById("toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => (toastEl.hidden = true), 2200);
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function saveSeen() { LS.set("seen", [...seen]); }

  /* ---------- Sintesi vocale ---------- */
  const Speaker = {
    supported: "speechSynthesis" in window && "SpeechSynthesisUtterance" in window,
    queue: [], playing: false, paused: false, onChange: null,
    voiceFor(l) {
      const voices = speechSynthesis.getVoices();
      const want = l === "it" ? "it" : "en";
      const pref = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith(want));
      // Preferisci voci "premium"/locali se presenti
      return pref.find((v) => /premium|enhanced|natural|siri|google/i.test(v.name)) || pref.find((v) => v.localService) || pref[0] || null;
    },
    speak(text, l) {
      if (!this.supported) return;
      this.stop();
      const parts = text.match(/[^.!?…]+[.!?…]+["»']?\s*|[^.!?…]+$/g) || [text];
      const voice = this.voiceFor(l);
      this.queue = parts.map((p) => {
        const u = new SpeechSynthesisUtterance(p.trim());
        u.lang = l === "it" ? "it-IT" : "en-GB";
        if (voice) u.voice = voice;
        u.rate = 0.98;
        return u;
      });
      this.playing = true; this.paused = false;
      this._next();
      this._emit();
    },
    _next() {
      if (!this.queue.length) { this.playing = false; this.paused = false; this._emit(); return; }
      const u = this.queue.shift();
      u.onend = () => this._next();
      u.onerror = () => this._next();
      speechSynthesis.speak(u);
    },
    pause() { if (this.playing && !this.paused) { speechSynthesis.pause(); this.paused = true; this._emit(); } },
    resume() { if (this.playing && this.paused) { speechSynthesis.resume(); this.paused = false; this._emit(); } },
    stop() { if (!this.supported) return; this.queue = []; speechSynthesis.cancel(); this.playing = false; this.paused = false; this._emit(); },
    _emit() { if (this.onChange) this.onChange(this); }
  };
  if (Speaker.supported) { speechSynthesis.onvoiceschanged = () => {}; speechSynthesis.getVoices(); }

  /* ---------- Router ---------- */
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, "");
    const [path, qs] = h.split("?");
    const params = new URLSearchParams(qs || "");
    const seg = path.split("/").filter(Boolean);
    return { seg, params };
  }
  function navigate(hash) { location.hash = hash; }

  function render() {
    Speaker.stop();
    const { seg, params } = parseHash();
    const page = seg[0] || "";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    document.getElementById("langBtn").textContent = t("lang_switch");
    let tab = "route";
    if (page === "opera" && seg[1]) { renderDetail(seg[1]); tab = "route"; }
    else if (page === "mappa") { renderMap(params); tab = "map"; }
    else if (page === "quiz") { renderQuiz(); tab = "quiz"; }
    else if (page === "info") { renderInfo(); tab = "info"; }
    else renderHome();
    document.querySelectorAll(".tabbar a").forEach((a) => a.classList.toggle("active", a.dataset.tab === tab));
    window.scrollTo(0, 0);
  }

  /* ---------- Home / Percorso ---------- */
  function renderHome() {
    const total = WORKS.length, done = WORKS.filter((w) => seen.has(w.id)).length;
    const nextWork = WORKS.find((w) => !seen.has(w.id));
    const pct = Math.round((done / total) * 100);
    let cta;
    if (done === 0) cta = `<a class="btn" href="#/opera/${WORKS[0].id}">${t("start")} →</a>`;
    else if (nextWork) cta = `<a class="btn" href="#/opera/${nextWork.id}">${t("continue")}: ${nextWork.n}. ${esc(nextWork.title[lang])} →</a>`;
    else cta = `<p class="muted" style="margin:8px 0">${t("all_seen")}</p><a class="btn" href="#/quiz">🏆 ${t("go_quiz")}</a>`;

    const groups = [
      { key: "conservatori", label: lang === "it" ? "Palazzo dei Conservatori" : "Palazzo dei Conservatori" },
      { key: "nuovo", label: "Palazzo Nuovo" }
    ];
    const list = groups.map((gr) => `
      <div class="section-label">${esc(gr.label)}</div>
      <ul class="work-list">
        ${WORKS.filter((w) => w.building === gr.key).map((w) => `
          <li><a class="work-item ${seen.has(w.id) ? "seen" : ""}" href="#/opera/${w.id}">
            <div class="thumb"><img src="${w.img}" alt="" loading="lazy"><span class="num">${seen.has(w.id) ? "✓" : w.n}</span></div>
            <div class="body">
              <h3>${w.n}. ${esc(w.title[lang])}</h3>
              <div class="room">📍 ${esc(w.room[lang])}</div>
              <div class="tl">${esc(w.tldr[lang])}</div>
            </div></a></li>`).join("")}
      </ul>`).join("");

    view.innerHTML = `
      <section class="card">
        <h1 style="font-size:24px">${t("hero_title")}</h1>
        <p class="muted" style="margin:0 0 12px">${t("hero_text")}</p>
        <div class="row between"><span>${t("progress")}: <b>${done}/${total}</b></span><span class="muted">${pct}%</span></div>
        <div class="progress"><span style="width:${pct}%"></span></div>
        <div style="margin-top:12px">${cta}</div>
      </section>
      ${list}`;
  }

  /* ---------- Dettaglio opera ---------- */
  function renderDetail(id) {
    const w = byId(id);
    if (!w) { navigate("#/"); return; }
    const idx = WORKS.indexOf(w);
    const prev = WORKS[idx - 1], next = WORKS[idx + 1];
    const L = w.links;
    const ytq = encodeURIComponent(L.yt[lang]);
    const isSeen = seen.has(w.id);
    const paragraphs = w.long[lang].split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join("");
    const extra = (L.extra || []).map((e) => `<li><a href="${e.url[lang]}" target="_blank" rel="noopener"><span class="ico">🔗</span>${esc(e.label[lang])}<span class="arrow">↗</span></a></li>`).join("");

    view.innerHTML = `
      <article class="detail">
        <div class="hero"><img src="${w.img}" alt="${esc(w.title[lang])}"><span class="badge">${w.n} / ${WORKS.length}</span></div>
        <h1>${esc(w.title[lang])}</h1>
        <div class="meta">${esc(w.author[lang])} · ${esc(w.material[lang])}</div>

        <div class="section-label">${t("tldr")}</div>
        <p class="tldr">${esc(w.tldr[lang])}</p>

        <div class="section-label">${t("where")}</div>
        <div class="card where">
          <span style="font-size:22px">📍</span>
          <div style="flex:1"><b>${esc(w.room[lang])}</b><br><span class="muted" style="font-size:13px">${esc(buildingLabel(w))}</span></div>
          <a class="btn small secondary" href="#/mappa?w=${w.id}">${t("show_on_map")}</a>
        </div>

        <div class="section-label">${t("detail")}</div>
        <div class="audio" id="audio">
          ${Speaker.supported ? `
            <button class="btn small" id="btnPlay" type="button">🔊 ${t("listen")}</button>
            <button class="btn small secondary" id="btnPause" type="button" hidden>⏸ ${t("pause")}</button>
            <button class="btn small secondary" id="btnStop" type="button" hidden>⏹ ${t("stop")}</button>
            <span class="state" id="audioState"></span>`
            : `<span class="state">${t("no_tts")}</span>`}
        </div>
        <div class="long" id="longText">${paragraphs}</div>

        <div class="fact"><span class="ico">💡</span><div><b>${t("curiosity")}</b><br>${esc(w.fact[lang])}</div></div>

        <div class="section-label">${t("resources")}</div>
        <ul class="links">
          <li><a href="${lang === "it" ? L.wiki_it : L.wiki_en}" target="_blank" rel="noopener"><span class="ico">📖</span>${t("wikipedia")}<span class="arrow">↗</span></a></li>
          <li><a href="${lang === "it" ? L.museum_it : L.museum_en}" target="_blank" rel="noopener"><span class="ico">🏛️</span>${t("museum_site")}<span class="arrow">↗</span></a></li>
          <li><a href="https://www.youtube.com/results?search_query=${ytq}" target="_blank" rel="noopener"><span class="ico">▶️</span>${t("youtube")}<span class="arrow">↗</span></a></li>
          ${extra}
        </ul>

        <div style="margin-top:18px">
          <button class="btn block ${isSeen ? "secondary" : ""}" id="btnSeen" type="button">${isSeen ? t("seen") : "✓ " + t("mark_seen")}</button>
        </div>

        <div class="pager">
          ${prev ? `<a class="btn secondary prev" href="#/opera/${prev.id}">← ${prev.n}. ${esc(shortTitle(prev))}</a>` : "<span></span>"}
          ${next ? `<a class="btn next" href="#/opera/${next.id}">${next.n}. ${esc(shortTitle(next))} →</a>` : `<a class="btn next" href="#/quiz">🏆 ${t("go_quiz")}</a>`}
        </div>
      </article>`;

    document.getElementById("btnSeen").addEventListener("click", () => {
      if (seen.has(w.id)) seen.delete(w.id); else seen.add(w.id);
      saveSeen();
      const s = seen.has(w.id);
      const b = document.getElementById("btnSeen");
      b.textContent = s ? t("seen") : "✓ " + t("mark_seen");
      b.classList.toggle("secondary", s);
      if (s && seen.size === WORKS.length) toast(t("all_seen"));
    });

    if (Speaker.supported) {
      const bp = document.getElementById("btnPlay"), bpa = document.getElementById("btnPause"), bs = document.getElementById("btnStop");
      const st = document.getElementById("audioState"), lt = document.getElementById("longText");
      const fullText = w.title[lang] + ". " + w.tldr[lang] + " " + w.long[lang];
      bp.addEventListener("click", () => Speaker.speak(fullText, lang));
      bpa.addEventListener("click", () => (Speaker.paused ? Speaker.resume() : Speaker.pause()));
      bs.addEventListener("click", () => Speaker.stop());
      Speaker.onChange = (s) => {
        bp.hidden = s.playing; bpa.hidden = !s.playing; bs.hidden = !s.playing;
        bpa.textContent = s.paused ? "▶ " + t("resume") : "⏸ " + t("pause");
        st.innerHTML = s.playing ? `<span class="playing">${s.paused ? "⏸" : "🔊"} …</span>` : "";
        lt.classList.toggle("reading", s.playing);
      };
    }
  }
  function shortTitle(w) { const s = w.title[lang]; return s.length > 22 ? s.slice(0, 20) + "…" : s; }
  function buildingLabel(w) {
    const b = w.building === "nuovo" ? "Palazzo Nuovo" : "Palazzo dei Conservatori";
    const f = { cortile: lang === "it" ? "cortile / piano terra" : "courtyard / ground floor", primo: lang === "it" ? "primo piano" : "first floor", secondo: lang === "it" ? "secondo piano" : "second floor" }[w.floor];
    return `${b} · ${f}`;
  }

  /* ---------- Mappa ---------- */
  function renderMap(params) {
    const wid = params.get("w");
    let floorId = params.get("f") || (wid && PIN_POS[wid] ? PIN_POS[wid].floor : "overview");
    if (!FLOORS.some((f) => f.id === floorId)) floorId = "overview";

    view.innerHTML = `
      <h1 style="font-size:24px">${t("map_title")}</h1>
      <p class="muted" style="margin:0 0 10px;font-size:14px">${t("map_note")}</p>
      <div class="floor-tabs" id="floorTabs"></div>
      <div class="map-wrap" id="mapWrap"></div>
      <p class="muted" style="font-size:13px;margin:8px 0 0">${t("legend_tap")}</p>
      <ul class="map-legend" id="mapLegend"></ul>`;

    const tabs = document.getElementById("floorTabs");
    const wrap = document.getElementById("mapWrap");
    const legend = document.getElementById("mapLegend");

    function draw(fid) {
      floorId = fid;
      tabs.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.f === fid));
      wrap.innerHTML = "";
      wrap.appendChild(buildFloorSVG(fid, lang, seen, wid, (id) => navigate("#/opera/" + id)));
      const here = WORKS.filter((w) => PIN_POS[w.id] && PIN_POS[w.id].floor === fid);
      legend.innerHTML = (fid === "overview" ? WORKS : here).map((w) => `
        <li class="${seen.has(w.id) ? "seen" : ""}"><a href="#/opera/${w.id}"><span class="num">${w.n}</span><span>${esc(w.title[lang])}</span><span class="rm">${esc(w.room[lang].split("(")[0].split(",")[0])}</span></a></li>`).join("");
      const act = tabs.querySelector("button.active");
      if (act) act.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      history.replaceState(null, "", `#/mappa?f=${fid}${wid ? "&w=" + wid : ""}`);
    }
    FLOORS.forEach((f) => {
      const b = document.createElement("button");
      b.type = "button"; b.dataset.f = f.id; b.textContent = t(f.label);
      b.addEventListener("click", () => draw(f.id));
      tabs.appendChild(b);
    });
    draw(floorId);
  }

  /* ---------- Quiz ---------- */
  const QUIZ_N = 10;
  let quiz = null;
  function pickQuestions() {
    const byWork = {};
    QUIZ.forEach((q) => (byWork[q.work] = byWork[q.work] || []).push(q));
    const works = Object.keys(byWork).sort(() => Math.random() - 0.5);
    const chosen = [];
    works.forEach((k) => { const arr = byWork[k]; chosen.push(arr[Math.floor(Math.random() * arr.length)]); });
    const rest = QUIZ.filter((q) => !chosen.includes(q)).sort(() => Math.random() - 0.5);
    while (chosen.length < QUIZ_N && rest.length) chosen.push(rest.pop());
    return chosen.sort(() => Math.random() - 0.5).slice(0, QUIZ_N).map((q) => {
      // Mescola le risposte mantenendo l'indice corretto
      const order = q.a[lang].map((_, i) => i).sort(() => Math.random() - 0.5);
      return { q, order };
    });
  }
  function rankFor(correct, total) {
    const r = correct / total;
    if (r === 1) return 3; if (r >= 0.8) return 2; if (r >= 0.5) return 1; return 0;
  }
  function renderQuiz() {
    if (!quiz || quiz.done && quiz.lang !== lang) quiz = null;
    if (!quiz) {
      const best = LS.get("best", null);
      view.innerHTML = `
        <section class="card" style="text-align:center">
          <div style="font-size:56px">🏆</div>
          <h1 style="font-size:26px">${t("quiz_title")}</h1>
          <p class="muted">${t("quiz_intro")}</p>
          ${best ? `<p><span class="score-pill">${t("quiz_best")}: ${best.correct}/${best.total} · ${best.score} ${t("quiz_points")}</span></p>` : ""}
          <button class="btn block" id="btnStartQuiz" type="button">${t("quiz_start")} →</button>
        </section>`;
      document.getElementById("btnStartQuiz").addEventListener("click", () => {
        quiz = { items: pickQuestions(), i: 0, correct: 0, score: 0, streak: 0, bestStreak: 0, answered: null, results: [], done: false, lang };
        renderQuiz();
      });
      return;
    }
    if (quiz.done) { renderResult(); return; }

    const it = quiz.items[quiz.i], q = it.q, w = byId(q.work);
    const total = quiz.items.length;
    view.innerHTML = `
      <div class="quiz-head">
        <span>${t("quiz_question")} <b>${quiz.i + 1}</b> ${t("quiz_of")} ${total}</span>
        <span class="score-pill">★ ${quiz.score}</span>
      </div>
      <div class="progress"><span style="width:${(quiz.i / total) * 100}%"></span></div>
      <div class="card">
        <div class="quiz-img"><img src="${w.img}" alt=""></div>
        <div class="quiz-q">${esc(q.q[lang])}</div>
        <div class="answers" id="answers">
          ${it.order.map((ai) => `<button type="button" data-ai="${ai}">${esc(q.a[lang][ai])}</button>`).join("")}
        </div>
        <div id="feedback"></div>
      </div>`;

    const answers = document.getElementById("answers");
    answers.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b || quiz.answered != null) return;
      const ai = Number(b.dataset.ai);
      quiz.answered = ai;
      const ok = ai === q.correct;
      answers.querySelectorAll("button").forEach((x) => {
        x.disabled = true;
        if (Number(x.dataset.ai) === q.correct) x.classList.add("correct");
        else if (x === b && !ok) x.classList.add("wrong");
      });
      let gained = 0;
      if (ok) { quiz.correct++; quiz.streak++; quiz.bestStreak = Math.max(quiz.bestStreak, quiz.streak); gained = 10 + Math.max(0, quiz.streak - 1) * 2; quiz.score += gained; }
      else quiz.streak = 0;
      quiz.results.push({ work: q.work, ok });
      const last = quiz.i === total - 1;
      document.getElementById("feedback").innerHTML = `
        <div class="feedback ${ok ? "ok" : "bad"}">${ok ? `${t("quiz_correct")} +${gained}${quiz.streak > 1 ? " 🔥×" + quiz.streak : ""}` : `${t("quiz_wrong")} ${t("quiz_answer_was")} “${esc(q.a[lang][q.correct])}”`}</div>
        <button class="btn block" id="btnNext" type="button">${last ? t("quiz_finish") : t("quiz_next")} →</button>`;
      document.querySelector(".score-pill").textContent = "★ " + quiz.score;
      document.getElementById("btnNext").addEventListener("click", () => {
        quiz.answered = null;
        if (last) { quiz.done = true; finishQuiz(); } else quiz.i++;
        renderQuiz();
      });
    });
  }
  function finishQuiz() {
    const best = LS.get("best", null);
    if (!best || quiz.score > best.score) LS.set("best", { score: quiz.score, correct: quiz.correct, total: quiz.items.length });
  }
  function renderResult() {
    const total = quiz.items.length;
    const r = rankFor(quiz.correct, total);
    const icons = ["🧳", "🔍", "🛡️", "🏛️"];
    const shareText = t("share_text").replace("{score}", quiz.correct).replace("{total}", total).replace("{rank}", t("rank_" + r));
    view.innerHTML = `
      <section class="card result">
        <div class="trophy">${icons[r]}</div>
        <div class="muted">${t("quiz_result")}</div>
        <div class="big">${quiz.correct}/${total}</div>
        <h2 class="rank">${t("rank_" + r)}</h2>
        <p class="muted">${t("rank_" + r + "_d")}</p>
        <div class="stats">
          <div><b>${quiz.score}</b><span>${t("quiz_points")}</span></div>
          <div><b>${quiz.bestStreak}</b><span>${t("quiz_streak")}</span></div>
          <div><b>${Math.round((quiz.correct / total) * 100)}%</b><span>${t("quiz_score")}</span></div>
        </div>
        <div class="row" style="justify-content:center">
          <button class="btn" id="btnRetry" type="button">🔁 ${t("quiz_retry")}</button>
          <button class="btn secondary" id="btnShare" type="button">📤 ${t("quiz_share")}</button>
        </div>
        <ul class="review-list">
          ${quiz.results.map((x) => { const w = byId(x.work); return `<li><span>${x.ok ? "✅" : "❌"}</span><span>${esc(w.title[lang])}</span>${x.ok ? "" : `<a href="#/opera/${w.id}">${t("quiz_review")} →</a>`}</li>`; }).join("")}
        </ul>
      </section>`;
    document.getElementById("btnRetry").addEventListener("click", () => { quiz = null; renderQuiz(); });
    document.getElementById("btnShare").addEventListener("click", async () => {
      try {
        if (navigator.share) await navigator.share({ text: shareText, url: location.href.split("#")[0] });
        else { await navigator.clipboard.writeText(shareText + " " + location.href.split("#")[0]); toast(t("quiz_copied")); }
      } catch {}
    });
  }

  /* ---------- Info ---------- */
  function renderInfo() {
    view.innerHTML = `
      <section class="card info">
        <h1 style="font-size:24px">${t("info_title")}</h1>
        <dl>
          <dt>🕘 ${t("info_hours")}</dt><dd>${t("info_hours_v")}</dd>
          <dt>📍 ${t("info_where")}</dt><dd>${t("info_where_v")}<br><a href="https://maps.apple.com/?q=Musei+Capitolini,+Piazza+del+Campidoglio+1,+Roma" target="_blank" rel="noopener">Apple Maps ↗</a> · <a href="https://www.google.com/maps/search/?api=1&query=Musei+Capitolini+Roma" target="_blank" rel="noopener">Google Maps ↗</a></dd>
          <dt>🚶 ${t("info_route")}</dt><dd>${t("info_route_v")}</dd>
          <dt>💡 ${t("info_tips")}</dt><dd>${t("info_tips_v")}</dd>
          <dt>🎫 ${t("info_tickets")}</dt><dd><a href="https://www.museicapitolini.org/${lang}" target="_blank" rel="noopener">museicapitolini.org ↗</a></dd>
          <dt>📱 PWA</dt><dd>${t("install")}</dd>
          <dt>🖼️ ${t("info_credits")}</dt><dd>${t("info_credits_v")} <a href="https://github.com/fabriziogianni7/capitolini-guide/blob/main/CREDITS.md" target="_blank" rel="noopener">CREDITS.md ↗</a></dd>
        </dl>
        <div style="margin-top:18px"><button class="btn secondary small" id="btnReset" type="button">${t("reset")}</button></div>
      </section>`;
    document.getElementById("btnReset").addEventListener("click", () => {
      if (confirm(t("reset_confirm"))) { seen.clear(); saveSeen(); LS.set("best", null); quiz = null; toast("✓"); }
    });
  }

  /* ---------- Avvio ---------- */
  document.getElementById("langBtn").addEventListener("click", () => {
    lang = lang === "it" ? "en" : "it"; LS.set("lang", lang);
    if (quiz && !quiz.done) quiz = null; // le domande cambiano lingua: si ricomincia
    render();
  });
  window.addEventListener("hashchange", render);
  window.addEventListener("pagehide", () => Speaker.stop());
  render();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
