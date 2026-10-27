# Decisioni e apprendimenti

## Consenso Maps e coerenza del sito — 27 ottobre 2026

### Problema e stato precedente

Sul commit `70861e953762381f703da06d4d4fffbcece3c9f8`, dopo accettazione, riapertura delle scelte e rifiuto, l'iframe Maps restava nella pagina. Il banner era inizializzato con `show` senza chiusura esplicita per scelte salvate. Il pulsante nel segnaposto chiamava direttamente `loadMap()` senza registrare il consenso. Il difetto è stato riprodotto anche dal test di regressione prima di applicare la correzione.

Il precedente intervento sull'unicità dell'iscrizione lasciava il numero nazionale “8” e note senza confronto visibile. I lastmod non rappresentavano le modifiche recenti, la documentazione citava ancora dieci URL e un endpoint mappa-sito 410, mentre il codice e il live erano già a 11 URL e redirect 301. Il markup FAQPage della pagina costi non corrispondeva alla presentazione discorsiva visibile.

### Decisione e motivazione

Correzioni minime: una sola scelta di consenso per entrambi i pulsanti di caricamento, rimozione immediata dell'iframe al rifiuto, ripristino del segnaposto e rispetto della scelta salvata. La riapertura del banner non cancella il consenso: la nuova decisione viene registrata quando l'utente sceglie.

Eliminati soltanto residui del vecchio confronto nazionale, adeguata la griglia alle tre iscrizioni personali, chiarito il confine del servizio gratuito, mantenuti gli schemi pertinenti e corretti lastmod e documentazione. Nessun cambio a URL, title, canonical, destinazione o campi del modulo; nessuna riscrittura SEO generale, modifica DNS o aggiunta di dipendenze.

Le date del 26/10 nella sitemap derivano dalle modifiche ai collegamenti di contenuto del commit `ab1959a` e alle FAQ del commit `1bef03a`; quelle del 27/10 corrispondono alle correzioni odierne. Non aggiornare lastmod al solo cambio di font, cache o documentazione.

### Rischi e verifiche

Test locali: prima visita, rifiuto, ricarica con scelta salvata, riapertura senza perdita della scelta, accettazione, assenza di iframe duplicati, revoca senza ricarica, ripristino del segnaposto, nuova accettazione, valore salvato non valido e cookie disabilitati. Controlli sintattici, JSON-LD, sitemap, link, frammenti e modulo invariato superati.

Le anteprime Cloudflare reindirizzano con `301` al dominio canonico: il check di deploy dell'anteprima, da solo, non consente una verifica isolata della nuova versione. Non è stata cambiata questa configurazione per eseguire il test.

PR #10 integrata nel commit `a4b2ecb87eecba4144586a26c58135ce1be7882c`, con deploy Cloudflare riuscito. Verifica eseguita sulla produzione aggiornata: 10 fasi del ciclo di consenso, comprese azioni da tastiera, persistenza alla ricarica, revoca senza ricarica e nuova accettazione; tutte superate. Verificate 11 pagine `200`, sitemap, metadati, JSON-LD, modulo e quattro redirect della homepage. La resa mobile della homepage è stata osservata nella prova Lighthouse; non è stata svolta una matrice interattiva completa smartphone/tablet.

Conservati i due report Lighthouse del 27/10: ore 06:36, mobile prestazioni 87 e LCP 3,2 s; ore 07:49, mobile 98 e LCP 1,8 s; desktop 99 in entrambe. Il miglioramento fra due singoli test di laboratorio non prova un effetto causale delle correzioni. Non sono disponibili CWV reali sufficienti.

### Dati e dipendenze

La lettura attuale di Search Console e la rettifica dell'indirizzo Reteimprese richiedono autenticazione. Conservare le nuove estrazioni in archivio privato con date e filtri completi. Non sostituire il confronto di 28 giorni con “Oggi”, né attribuire variazioni di pochi clic a modifiche pubblicate da pochi giorni. Lo storico di ottobre 24 resta datato e distinto dalle nuove misurazioni.

Il controllo DNS ha trovato MX Register.it ma nessun SPF/DMARC; ciò non dimostra caselle attive né autorizza a rimuovere il record MX. Prima di una politica anti-impersonificazione ricostruire tutti gli invii e predisporre il rollback della zona, che non è coperto da Git.

### Rollback

Revertire il commit delle correzioni preserva la cronologia. Il riferimento completo precedente è `70861e953762381f703da06d4d4fffbcece3c9f8`, con albero `7a8d57585c425862b6d2eb5669ded262cb5a9d64`, ricostruito e verificato prima delle modifiche. Nessuna impostazione esterna è stata cambiata in questa fase.

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
