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

## Limiti e stato non verificato

- Google Search Console: **NON VERIFICATO** nell'audit del 24 ottobre 2026. GSC Wizard ha rifiutato le richieste perché il trial/abbonamento non è attivo.
- Core Web Vitals di campo: **NON VERIFICATI** per lo stesso motivo.
- PageSpeed Insights: tentativo eseguito, ma API Google in quota esaurita (`429`); punteggi Lighthouse e metriche di laboratorio **NON VERIFICATI**.
- Configurazione interna Cloudflare (progetto, regole, SSL/TLS, DNS e impostazioni email-obfuscation): osservata solo dagli effetti pubblici, non modificata e **NON VERIFICATA** nel pannello.
- Invio reale del modulo Formspree: non eseguito durante l'audit SEO, per evitare trasmissioni di dati e messaggi di prova non richiesti.

## Intervento dell'audit

- Aggiunto al menu mobile lo stato accessibile `aria-expanded` e il collegamento `aria-controls`, sincronizzati in apertura e chiusura.
- Allineato il `lastmod` FAQ in sitemap alla modifica del 3 ottobre 2026.
- Aggiunta la documentazione tecnica mancante (`README.md`, `CONTEXT.md`, `LEARNING.md`).
