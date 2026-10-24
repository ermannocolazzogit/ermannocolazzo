# ermannocolazzo.it

Sito statico professionale di Ermanno Colazzo, pubblicato dal repository GitHub `ermannocolazzogit/ermannocolazzo`, branch `main`, tramite Cloudflare.

## Struttura

- `index.html`: homepage e modulo di primo contatto.
- cartelle con `index.html`: pagine dei servizi, FAQ e informative.
- `styles.css`: foglio di stile condiviso; `original.css` è mantenuto come file di compatibilità.
- `sitemap.xml`, `robots.txt`, `_redirects`: indicizzazione e normalizzazione degli URL.
- `functions/`: risposte `410 Gone` per feed e vecchi endpoint non più utilizzati.

## Pubblicazione e verifiche

Il branch operativo è `main`. Prima di ogni modifica verificare working tree, diff e commit stabile. Dopo il push attendere il deploy Cloudflare e controllare sul dominio canonico `https://www.ermannocolazzo.it/` almeno: status HTTP, redirect, canonical, pagina modificata, mobile, collegamenti, sitemap e asset.

Il deploy non è considerato concluso finché la modifica non è stata verificata sul sito pubblico. Non inserire credenziali o dati riservati nel repository.

## Documentazione

- `CONTEXT.md`: stato tecnico verificato e limiti correnti.
- `LEARNING.md`: decisioni, problemi e indicazioni per rollback.
