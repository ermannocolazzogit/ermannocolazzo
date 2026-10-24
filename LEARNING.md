# Decisioni e apprendimenti

## Audit SEO di secondo livello — 24 ottobre 2026

### Stato precedente

Il repository era pulito sul commit `dd79214`, ma non conteneva `README.md`, `CONTEXT.md` o `LEARNING.md`. Il sito pubblico era raggiungibile e coerente sul dominio `www`; Cloudflare trasformava parte dell'HTML live per offuscare gli indirizzi email, producendo hash differenti dal sorgente senza indicare un deploy divergente.

### Problemi rilevati

1. Il pulsante del menu mobile apriva e chiudeva correttamente la navigazione, ma non esponeva lo stato ai lettori di schermo.
2. La data `lastmod` della pagina FAQ non rifletteva la modifica pubblicata il 3 ottobre 2026.
3. Mancava la documentazione tecnica prescritta dal progetto.
4. GSC Wizard non era utilizzabile senza piano attivo, ma gli stessi dati essenziali sono stati verificati gratuitamente nell'interfaccia Google Search Console ed esportati in Excel. PageSpeed Insights ha risposto con quota esaurita.

### Decisione

Applicare soltanto correzioni minime e reversibili: attributi ARIA e sincronizzazione dello stato del menu, aggiornamento puntuale della sitemap e creazione della documentazione. Nessuna modifica a DNS, SSL/TLS, Cloudflare, form, URL, canonical, Schema.org o contenuti professionali.

### Rischi e controlli

- Rischio basso: la logica del menu modifica soltanto una classe CSS e l'attributo `aria-expanded`.
- Rischio basso: il `lastmod` FAQ usa la data del commit che ha effettivamente modificato la pagina.
- Controllare dopo il deploy apertura/chiusura del menu su mobile, reset dello stato dopo la selezione di una voce e disponibilità di sitemap e pagine.

### Rollback

Il rollback completo è il commit `dd792144dac50ae6196394bc241909765c0b372a`. In alternativa è possibile revertire il solo commit dell'audit.

### Attività rimaste

- Monitorare per almeno altri 28 giorni `/perizie-arti-grafiche/`, che nel confronto GSC più recente ha perso 3 clic e circa 10 posizioni medie su volumi ridotti; evitare riscritture basate su un solo campione.
- In Google Search Console mantenere soltanto la sitemap canonica HTTPS `www` e rimuovere le due submission duplicate solo dopo conferma esplicita, trattandosi di una modifica allo stato dell'account.
- Attendere il naturale aggiornamento dell'indice per la vecchia `/mappa-sito`, già correttamente servita come `410 Gone` con `noindex`; non avviare convalide finché non emergono nuove URL problematiche.
- Per analisi di decadimento o cannibalizzazione, continuare a usare gli export gratuiti GSC. Con soli 42 clic in tre mesi e query anonimizzate, le conclusioni per singola query hanno affidabilità limitata.
- Ripetere Lighthouse/PageSpeed mobile e desktop quando la quota è disponibile.
- Valutare security header aggiuntivi soltanto dopo verifica della configurazione Cloudflare e con piano di rollback.
