/* ============================================================
   Mappa schematica dei Musei Capitolini (SVG generato in JS).
   Non in scala: serve a orientarsi tra edifici, piani e sale.
   ============================================================ */

const FLOORS = [
  { id: "overview",      label: "overview" },
  { id: "cons-cortile",  label: "f_cons_cortile",  building: "conservatori", floor: "cortile" },
  { id: "cons-primo",    label: "f_cons_primo",    building: "conservatori", floor: "primo" },
  { id: "cons-secondo",  label: "f_cons_secondo",  building: "conservatori", floor: "secondo" },
  { id: "nuovo-cortile", label: "f_nuovo_cortile", building: "nuovo",        floor: "cortile" },
  { id: "nuovo-primo",   label: "f_nuovo_primo",   building: "nuovo",        floor: "primo" }
];

/* Posizione di ogni opera: piano + coordinate nel viewBox 0 0 360 260 */
const PIN_POS = {
  "costantino":    { floor: "cons-cortile",  x: 262, y: 128 },
  "orazi":         { floor: "cons-primo",    x: 48,  y: 52 },
  "spinario":      { floor: "cons-primo",    x: 150, y: 44 },
  "bruto":         { floor: "cons-primo",    x: 176, y: 62 },
  "lupa":          { floor: "cons-primo",    x: 228, y: 52 },
  "medusa":        { floor: "cons-primo",    x: 284, y: 52 },
  "marco-aurelio": { floor: "cons-primo",    x: 120, y: 172 },
  "ercole":        { floor: "cons-primo",    x: 168, y: 196 },
  "commodo":       { floor: "cons-primo",    x: 274, y: 176 },
  "buona-ventura": { floor: "cons-secondo",  x: 236, y: 120 },
  "san-giovanni":  { floor: "cons-secondo",  x: 276, y: 150 },
  "marforio":      { floor: "nuovo-cortile", x: 180, y: 74 },
  "galata":        { floor: "nuovo-primo",   x: 318, y: 176 },
  "venere":        { floor: "nuovo-primo",   x: 92,  y: 176 },
  "colombe":       { floor: "nuovo-primo",   x: 44,  y: 176 }
};

function svgEl(tag, attrs, children) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  (children || []).forEach((c) => el.appendChild(c));
  return el;
}
function txt(x, y, s, cls) {
  const t = svgEl("text", { x, y, class: "lbl " + (cls || "") });
  t.textContent = s;
  return t;
}
function room(x, y, w, h, label, opts) {
  opts = opts || {};
  const g = svgEl("g");
  g.appendChild(svgEl("rect", { x, y, width: w, height: h, rx: 2, class: opts.cls || "room" }));
  if (label) {
    const lines = Array.isArray(label) ? label : [label];
    const lh = opts.big ? 11 : 9.5;
    const y0 = opts.labelY != null ? opts.labelY : y + h / 2 - ((lines.length - 1) * lh) / 2 + 3;
    lines.forEach((ln, i) => {
      const t = txt(x + w / 2, y0 + i * lh, ln, (opts.big ? "big " : "") + (opts.tiny ? "tiny" : ""));
      t.setAttribute("text-anchor", "middle");
      g.appendChild(t);
    });
  }
  return g;
}
function arrow(x1, y1, x2, y2) {
  const g = svgEl("g");
  g.appendChild(svgEl("line", { x1, y1, x2, y2, class: "path" }));
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const ax = x2, ay = y2, s = 5;
  const p = [
    [ax, ay],
    [ax - s * Math.cos(ang - 0.5), ay - s * Math.sin(ang - 0.5)],
    [ax - s * Math.cos(ang + 0.5), ay - s * Math.sin(ang + 0.5)]
  ].map((q) => q.join(",")).join(" ");
  g.appendChild(svgEl("polygon", { points: p, class: "arrow" }));
  return g;
}

/* ---------- Piani ---------- */
const FLOOR_DRAWERS = {
  overview(g, L) {
    // Piazza del Campidoglio (trapezio)
    g.appendChild(svgEl("polygon", { points: "108,84 252,84 300,206 60,206", class: "open" }));
    g.appendChild(txt(180, 120, "Piazza del Campidoglio", "big"));
    g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(180, 132, L.it ? "(copia di Marco Aurelio)" : "(copy of Marcus Aurelius)", "tiny"));
    g.lastChild.setAttribute("text-anchor", "middle");
    // Palazzo Senatorio
    g.appendChild(room(96, 34, 168, 46, ["Palazzo Senatorio", L.it ? "(Comune di Roma)" : "(City Hall)"], { big: false }));
    // Tabularium sotto
    g.appendChild(svgEl("path", { d: "M84,96 C84,60 276,60 276,96", class: "void" }));
    g.appendChild(txt(180, 92, L.it ? "Galleria Lapidaria + Tabularium (sotterraneo)" : "Galleria Lapidaria + Tabularium (underground)", "tiny"));
    g.lastChild.setAttribute("text-anchor", "middle");
    // Palazzo Nuovo (sinistra)
    g.appendChild(room(14, 84, 74, 126, ["Palazzo", "Nuovo"], { big: true }));
    g.appendChild(txt(51, 172, "12–15", "big")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(51, 184, L.it ? "Galata, Venere," : "Dying Gaul, Venus,", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(51, 193, L.it ? "Colombe, Marforio" : "Doves, Marforio", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    // Palazzo dei Conservatori (destra)
    g.appendChild(room(272, 84, 74, 126, ["Palazzo dei", "Conservatori"], { big: true }));
    g.appendChild(txt(309, 172, "1–11", "big")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(309, 184, L.it ? "Lupa, Marco Aurelio," : "Wolf, Marcus Aurelius,", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(309, 193, L.it ? "Caravaggio…" : "Caravaggio…", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    // Ingresso
    g.appendChild(txt(309, 226, L.it ? "▲ Ingresso / biglietteria" : "▲ Entrance / tickets", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    // Cordonata
    g.appendChild(svgEl("polygon", { points: "150,206 210,206 226,250 134,250", class: "open" }));
    g.appendChild(txt(180, 232, "Cordonata", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(180, 242, L.it ? "▼ Piazza Venezia" : "▼ Piazza Venezia", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    // Percorso
    g.appendChild(arrow(309, 96, 276, 72));
    g.appendChild(arrow(84, 72, 51, 96));
  },

  "cons-cortile"(g, L) {
    g.appendChild(room(60, 30, 240, 200, null));
    g.appendChild(room(96, 66, 168, 128, L.it ? "Cortile" : "Courtyard", { cls: "open", big: true, labelY: 96 }));
    g.appendChild(room(60, 30, 240, 36, L.it ? "Atrio / biglietteria" : "Atrium / tickets"));
    g.appendChild(room(60, 194, 240, 36, L.it ? "Scalone → 1° piano" : "Grand staircase → 1st floor"));
    g.appendChild(room(60, 66, 36, 128, [L.it ? "Portico" : "Portico"], { tiny: true }));
    g.appendChild(room(264, 66, 36, 128, [L.it ? "Portico" : "Portico"], { tiny: true }));
    g.appendChild(txt(180, 150, L.it ? "Frammenti del Colosso" : "Colossus fragments", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(180, 160, L.it ? "lungo la parete destra" : "along the right wall", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(180, 248, L.it ? "▲ Ingresso dalla piazza" : "▲ Entrance from the square", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(arrow(180, 236, 180, 200));
  },

  "cons-primo"(g, L) {
    // Appartamento dei Conservatori (fila lungo la piazza)
    g.appendChild(txt(180, 20, L.it ? "Appartamento dei Conservatori" : "Conservators' Apartment", "big")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(room(10, 28, 76, 66, [L.it ? "Sala degli" : "Hall of the", L.it ? "Orazi e Curiazi" : "Horatii & Curiatii"], { labelY: 78 }));
    g.appendChild(room(86, 28, 46, 66, [L.it ? "Sala dei" : "Hall of the", L.it ? "Capitani" : "Captains"], { tiny: true, labelY: 78 }));
    g.appendChild(room(132, 28, 66, 66, [L.it ? "Sala dei" : "Hall of the", L.it ? "Trionfi" : "Triumphs"], { labelY: 80 }));
    g.appendChild(room(198, 28, 60, 66, [L.it ? "Sala della" : "Hall of the", L.it ? "Lupa" : "She-Wolf"], { labelY: 78 }));
    g.appendChild(room(258, 28, 52, 66, [L.it ? "Sala delle" : "Hall of the", L.it ? "Oche" : "Geese"], { labelY: 78 }));
    g.appendChild(room(310, 28, 44, 66, [L.it ? "Sala delle" : "Hall of the", L.it ? "Aquile" : "Eagles"], { tiny: true, labelY: 78 }));
    // Scalone
    g.appendChild(room(10, 100, 76, 40, [L.it ? "Scalone" : "Staircase", L.it ? "(dal cortile)" : "(from courtyard)"], { tiny: true }));
    g.appendChild(room(10, 146, 76, 84, [L.it ? "Sale" : "Halls of", L.it ? "castellane /" : "the Castellani", L.it ? "Fasti" : "Fasti"], { tiny: true }));
    // Nuova ala: Esedra e Horti Lamiani
    g.appendChild(room(92, 106, 140, 124, [L.it ? "Esedra di" : "Exedra of", "Marco Aurelio"], { big: true, labelY: 130 }));
    g.appendChild(txt(162, 222, L.it ? "+ fondazioni Tempio di Giove" : "+ Temple of Jupiter foundations", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(room(238, 106, 116, 60, [L.it ? "Tempio di Giove" : "Temple of Jupiter", L.it ? "(reperti)" : "(finds)"], { tiny: true }));
    g.appendChild(room(238, 170, 116, 60, [L.it ? "Sale degli" : "Halls of the", "Horti Lamiani"], { labelY: 210 }));
    g.appendChild(txt(180, 250, L.it ? "→ Scale/ascensore verso 2° piano (Pinacoteca) e sotterranei" : "→ Stairs/lift to 2nd floor (Picture Gallery) and underground", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(arrow(48, 100, 48, 96));
    g.appendChild(arrow(90, 126, 92, 150));
  },

  "cons-secondo"(g, L) {
    g.appendChild(txt(180, 20, L.it ? "Pinacoteca Capitolina" : "Capitoline Picture Gallery", "big")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(room(10, 30, 50, 60, ["Sala I"], { tiny: true }));
    g.appendChild(room(60, 30, 50, 60, ["Sala II"], { tiny: true }));
    g.appendChild(room(110, 30, 50, 60, ["Sala III"], { tiny: true }));
    g.appendChild(room(160, 30, 50, 60, ["Sala IV"], { tiny: true }));
    g.appendChild(room(210, 30, 50, 60, ["Sala V"], { tiny: true }));
    g.appendChild(room(260, 30, 50, 60, ["Sala VI"], { tiny: true }));
    g.appendChild(room(310, 30, 44, 60, [L.it ? "Sala" : "Room", "Cini"], { tiny: true }));
    g.appendChild(room(10, 96, 76, 40, [L.it ? "Scale" : "Stairs", L.it ? "dal 1° piano" : "from 1st floor"], { tiny: true }));
    g.appendChild(room(10, 142, 76, 88, [L.it ? "Galleria" : "Gallery", "Cini"], { tiny: true }));
    g.appendChild(room(92, 96, 96, 134, [L.it ? "Sala di" : "Room of", "Pietro da Cortona"], { tiny: true }));
    g.appendChild(room(194, 96, 160, 134, [L.it ? "Sala di" : "Room of", "Santa Petronilla"], { big: true, labelY: 190 }));
    g.appendChild(txt(274, 214, L.it ? "Caravaggio, Guercino, Rubens…" : "Caravaggio, Guercino, Rubens…", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(txt(180, 250, L.it ? "Sul 2° piano anche la Terrazza Caffarelli (caffè)" : "The Caffarelli Terrace café is also on the 2nd floor", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(arrow(86, 116, 92, 160));
  },

  "nuovo-cortile"(g, L) {
    g.appendChild(room(60, 30, 240, 200, null));
    g.appendChild(room(96, 96, 168, 98, L.it ? "Cortile" : "Courtyard", { cls: "open", big: true, labelY: 150 }));
    g.appendChild(room(96, 30, 168, 66, [L.it ? "Fontana di Marforio" : "Marforio fountain"], { labelY: 88 }));
    g.appendChild(room(60, 30, 36, 200, [L.it ? "Portico" : "Portico"], { tiny: true }));
    g.appendChild(room(264, 30, 36, 200, [L.it ? "Portico" : "Portico"], { tiny: true }));
    g.appendChild(room(60, 194, 240, 36, [L.it ? "Atrio · scalone → 1° piano" : "Atrium · staircase → 1st floor"], { tiny: true }));
    g.appendChild(txt(180, 248, L.it ? "▲ Arrivo dal Tabularium (sotterraneo) o dalla piazza" : "▲ Arrival from the Tabularium (underground) or the square", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(arrow(180, 236, 180, 200));
  },

  "nuovo-primo"(g, L) {
    g.appendChild(txt(180, 20, L.it ? "Palazzo Nuovo · primo piano" : "Palazzo Nuovo · first floor", "big")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(room(10, 30, 344, 56, [L.it ? "Galleria (busti e statue)" : "Gallery (busts and statues)"], { cls: "open" }));
    g.appendChild(room(10, 92, 66, 60, [L.it ? "Scale dal" : "Stairs from", L.it ? "cortile" : "courtyard"], { tiny: true }));
    g.appendChild(room(10, 158, 66, 72, [L.it ? "Sala delle" : "Hall of the", L.it ? "Colombe" : "Doves"], { labelY: 214 }));
    g.appendChild(room(80, 158, 40, 72, [L.it ? "Gab." : "Cab.", L.it ? "Venere" : "Venus"], { tiny: true, labelY: 212 }));
    g.appendChild(room(124, 158, 62, 72, [L.it ? "Sala degli" : "Hall of the", L.it ? "Imperatori" : "Emperors"], { tiny: true }));
    g.appendChild(room(190, 158, 62, 72, [L.it ? "Sala dei" : "Hall of the", L.it ? "Filosofi" : "Philosophers"], { tiny: true }));
    g.appendChild(room(256, 92, 98, 60, [L.it ? "Sala del" : "Hall of the", L.it ? "Fauno" : "Faun"], { tiny: true }));
    g.appendChild(room(80, 92, 172, 60, [L.it ? "Salone" : "Great Hall"], { big: true }));
    g.appendChild(room(256, 158, 98, 72, [L.it ? "Sala del" : "Hall of the", L.it ? "Gladiatore" : "Gladiator"], { labelY: 214 }));
    g.appendChild(txt(180, 250, L.it ? "Percorso: Colombe → Venere → Imperatori → Filosofi → Salone → Fauno → Gladiatore" : "Route: Doves → Venus → Emperors → Philosophers → Great Hall → Faun → Gladiator", "tiny")); g.lastChild.setAttribute("text-anchor", "middle");
    g.appendChild(arrow(43, 152, 43, 158));
  }
};

/**
 * Costruisce l'SVG di un piano.
 * @param floorId id del piano
 * @param lang "it" | "en"
 * @param seen Set di id opere viste
 * @param activeId id opera da evidenziare
 * @param onPin callback(id)
 */
function buildFloorSVG(floorId, lang, seen, activeId, onPin) {
  const L = { it: lang === "it" };
  const svg = svgEl("svg", { viewBox: "0 0 360 260", class: "map-svg", role: "img" });
  const g = svgEl("g");
  svg.appendChild(g);
  FLOOR_DRAWERS[floorId](g, L);
  WORKS.forEach((w) => {
    const p = PIN_POS[w.id];
    if (!p || p.floor !== floorId) return;
    const cls = "pin" + (seen.has(w.id) ? " seen" : "") + (activeId === w.id ? " active" : "");
    const pin = svgEl("g", { class: cls, tabindex: 0, role: "button" });
    pin.appendChild(svgEl("circle", { cx: p.x, cy: p.y, r: activeId === w.id ? 11 : 9 }));
    const t = svgEl("text", { x: p.x, y: p.y });
    t.textContent = String(w.n);
    pin.appendChild(t);
    const title = svgEl("title"); title.textContent = w.title[lang]; pin.appendChild(title);
    pin.addEventListener("click", () => onPin(w.id));
    pin.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPin(w.id); } });
    svg.appendChild(pin);
  });
  return svg;
}
