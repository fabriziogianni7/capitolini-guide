# Musei Capitolini · Guida alla visita 🏛️

Web app mobile (PWA, senza backend) che accompagna la visita ai **Musei Capitolini** di Roma
attraverso i **15 capolavori** da non perdere. Italiano 🇮🇹 e inglese 🇬🇧.

**Live:** https://fabriziogianni7.github.io/capitolini-guide/

## Funzioni

- **Percorso guidato** nell'ordine di visita consigliato (Palazzo dei Conservatori → Tabularium → Palazzo Nuovo)
- Per ogni opera: **TL;DR**, **approfondimento**, **audio** (sintesi vocale del browser, IT/EN), immagine, curiosità
- **Risorse**: Wikipedia, scheda sul sito ufficiale del museo, ricerca video su YouTube
- **Mappa schematica** per edificio e piano, con i numeri delle opere
- **Progressi** salvati sul telefono (opere viste)
- **Quiz finale** con punteggio, serie, titoli (da *Turista distratto* a *Senatore di Roma*) e condivisione
- Installabile come app (Add to Home Screen) e utilizzabile **offline** grazie al service worker

## Le 15 opere

| # | Opera | Dove |
|---|-------|------|
| 1 | Frammenti del Colosso di Costantino | Conservatori · cortile |
| 2 | Sala degli Orazi e Curiazi | Conservatori · 1° piano |
| 3 | Spinario | Sala dei Trionfi |
| 4 | Bruto Capitolino | Sala dei Trionfi |
| 5 | Lupa Capitolina | Sala della Lupa |
| 6 | Medusa di Bernini | Sala delle Oche |
| 7 | Statua equestre di Marco Aurelio | Esedra di Marco Aurelio |
| 8 | Ercole del Foro Boario | Esedra di Marco Aurelio |
| 9 | Busto di Commodo come Ercole | Sale degli Horti Lamiani |
| 10 | La Buona Ventura (Caravaggio) | Pinacoteca · 2° piano |
| 11 | San Giovanni Battista (Caravaggio) | Pinacoteca · 2° piano |
| 12 | Marforio | Palazzo Nuovo · cortile |
| 13 | Galata morente | Sala del Gladiatore |
| 14 | Venere Capitolina | Gabinetto della Venere |
| 15 | Mosaico delle colombe | Sala delle Colombe |

## Sviluppo

Nessuna build: è HTML/CSS/JS puro.

```bash
python3 -m http.server 8080
# apri http://localhost:8080
```

Struttura:

- `index.html` — shell dell'app
- `data.js` — testi delle opere (IT/EN), link, domande del quiz, stringhe UI
- `map.js` — mappa schematica SVG per piano
- `app.js` — routing, viste, audio, quiz, progressi
- `sw.js` + `manifest.webmanifest` — PWA/offline
- `img/` — foto (vedi [CREDITS.md](CREDITS.md))

## Note

- La mappa è **schematica e non in scala**: serve per orientarsi tra edifici, piani e sale.
- Orari e biglietti: verifica sempre su [museicapitolini.org](https://www.museicapitolini.org/).
- I testi sono stati redatti per questa guida; per approfondire usa i link alle fonti.
