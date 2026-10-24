# Stato del progetto

Ultimo aggiornamento: 24 ottobre 2026.

## Stato verificato

- Repository: `ermannocolazzogit/ermannocolazzo`, branch `main`.
- Commit stabile precedente all'audit: `dd792144dac50ae6196394bc241909765c0b372a` (`Fix FAQ home link`).
- Working tree iniziale: pulito e allineato a `origin/main`.
- Dominio canonico: `https://www.ermannocolazzo.it/`.
- Le varianti HTTP, HTTPS senza `www` e `/index.html` convergono al canonico con un solo redirect `301`.
- Tutti i dieci URL in sitemap rispondono `200` senza redirect.
- `robots.txt` e `sitemap.xml` rispondono `200`; una URL inesistente risponde `404`; i vecchi endpoint feed verificati rispondono `410`.
- Le pagine indicizzabili hanno title, description, canonical, un solo H1 e dati JSON-LD sintatticamente validi dove previsti.
- Verifica responsive della homepage a 390 x 844 e 1366 x 768: nessun overflow orizzontale; menu mobile funzionante.
- Register.it: in base alla verifica precedente richiamata dal progetto, non risultano caselle email o alias attivi per il dominio.

## Google Search Console

Verifica diretta eseguita il 24 ottobre 2026 sulla proprietà dominio `sc-domain:ermannocolazzo.it`, usando l'interfaccia Google e gli export Excel gratuiti.

- Ultimi tre mesi (24 luglio-22 ottobre): 42 clic, 1.376 impressioni, CTR 3,1%, posizione media 19,6.
- Ultimi 28 giorni contro i 28 precedenti: 11 contro 13 clic, 431 contro 494 impressioni, CTR stabile al 2,6%, posizione media migliorata da 20,7 a 20,0. Il calo riguarda soprattutto il volume, non un peggioramento generale delle posizioni.
- Homepage negli ultimi 28 giorni: 9 clic contro 7, CTR 6,87% contro 5,07%, posizione media 6,45 contro 9,14.
- Criticità principale da monitorare: `/perizie-arti-grafiche/`, passata da 3 a 0 clic e da posizione media 10,56 a 20,57, su un campione comunque ridotto (62 contro 46 impressioni).
- Indicizzazione: 11 URL indicate come indicizzate e 26 non indicizzate. Le dieci URL canoniche della sitemap sono presenti; l'undicesima è la vecchia `http://www.ermannocolazzo.it/mappa-sito`, che live esegue `301` verso HTTPS e poi restituisce `410 Gone` con `X-Robots-Tag: noindex`.
- Esclusioni: 16 URL con redirect, 3 con `noindex`, 2 risposte 404 e 5 URL scansionate ma non indicizzate. Le cinque ultime sono quattro vecchi feed RSS/Atom e la vecchia `/privacy`; gli endpoint feed sono già `410` e la privacy legacy è già normalizzata.
- Sitemap: risultano ancora inviate tre varianti (HTTP `www`, HTTPS senza `www`, HTTPS `www`), tutte riuscite e con 10 URL. La sola variante canonica da mantenere è `https://www.ermannocolazzo.it/sitemap.xml`.
- HTTPS: 10 URL HTTPS, 0 non HTTPS, nessun problema critico.
- Breadcrumb: 6 elementi validi, 0 non validi. Dati strutturati non analizzabili: 0 errori; la precedente convalida è superata.
- Azioni manuali: nessun problema rilevato. Problemi di sicurezza: nessun problema rilevato.
- Core Web Vitals: Google non dispone di dati reali sufficienti negli ultimi 90 giorni, sia mobile sia desktop.

## Limiti e stato non verificato

- Core Web Vitals di campo: indisponibili per traffico insufficiente nel Chrome UX Report; non costituisce un errore del sito.
- PageSpeed Insights: tentativo eseguito, ma API Google in quota esaurita (`429`); punteggi Lighthouse e metriche di laboratorio **NON VERIFICATI**.
- Configurazione interna Cloudflare (progetto, regole, SSL/TLS, DNS e impostazioni email-obfuscation): osservata solo dagli effetti pubblici, non modificata e **NON VERIFICATA** nel pannello.
- Invio reale del modulo Formspree: non eseguito durante l'audit SEO, per evitare trasmissioni di dati e messaggi di prova non richiesti.

## Intervento dell'audit

- Aggiunto al menu mobile lo stato accessibile `aria-expanded` e il collegamento `aria-controls`, sincronizzati in apertura e chiusura.
- Allineato il `lastmod` FAQ in sitemap alla modifica del 3 ottobre 2026.
- Aggiunta la documentazione tecnica mancante (`README.md`, `CONTEXT.md`, `LEARNING.md`).
