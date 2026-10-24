# Decisioni e apprendimenti

## Audit SEO di secondo livello — 24 ottobre 2026

### Stato precedente

Il repository era pulito sul commit `dd79214`, ma non conteneva `README.md`, `CONTEXT.md` o `LEARNING.md`. Il sito pubblico era raggiungibile e coerente sul dominio `www`; Cloudflare trasformava parte dell'HTML live per offuscare gli indirizzi email, producendo hash differenti dal sorgente senza indicare un deploy divergente.

### Problemi rilevati

1. Il pulsante del menu mobile apriva e chiudeva correttamente la navigazione, ma non esponeva lo stato ai lettori di schermo.
2. La data `lastmod` della pagina FAQ non rifletteva la modifica pubblicata il 3 ottobre 2026.
3. Mancava la documentazione tecnica prescritta dal progetto.
4. I dati Search Console e Core Web Vitals non erano accessibili perché GSC Wizard non aveva un piano attivo; PageSpeed Insights ha risposto con quota esaurita.

### Decisione

Applicare soltanto correzioni minime e reversibili: attributi ARIA e sincronizzazione dello stato del menu, aggiornamento puntuale della sitemap e creazione della documentazione. Nessuna modifica a DNS, SSL/TLS, Cloudflare, form, URL, canonical, Schema.org o contenuti professionali.

### Rischi e controlli

- Rischio basso: la logica del menu modifica soltanto una classe CSS e l'attributo `aria-expanded`.
- Rischio basso: il `lastmod` FAQ usa la data del commit che ha effettivamente modificato la pagina.
- Controllare dopo il deploy apertura/chiusura del menu su mobile, reset dello stato dopo la selezione di una voce e disponibilità di sitemap e pagine.

### Rollback

Il rollback completo è il commit `dd792144dac50ae6196394bc241909765c0b372a`. In alternativa è possibile revertire il solo commit dell'audit.

### Attività rimaste

- Riattivare GSC Wizard e completare il confronto degli ultimi 28 giorni, decadimento, cannibalizzazione, opportunità e CWV di campo.
- Ripetere Lighthouse/PageSpeed mobile e desktop quando la quota è disponibile.
- Valutare security header aggiuntivi soltanto dopo verifica della configurazione Cloudflare e con piano di rollback.
