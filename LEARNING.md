# Decisioni e apprendimenti

## Nome non spezzato sul cellulare — 29 ottobre 2026

Problema: il minimo di 2,35 rem imposto al nome lo portava su due righe sui telefoni, come mostrato dal titolare. Opzioni: ridurre il carattere in funzione del viewport o abbreviare il nome. Scelta: conservare il testo completo e correggere una sola regola CSS mobile con `clamp(1.4rem,7.6vw,3.25rem)` e `white-space: nowrap`.

Motivazione: mantenere il nome su una riga, più evidente del sottotitolo, senza modificare il desktop. Verifiche in iframe CSS a 320, 360, 390, 430, 760 e 768 px: una riga, nessun taglio e nessuno scorrimento orizzontale; confronto con main limitato a una riga CSS. Nessuna modifica a HTML, SEO, script o modulo. Limite: le prove non sono su telefoni fisici o con tutte le impostazioni personalizzate dei caratteri. Rollback alla regola mobile del commit `1f986e694b90469d57b6ec3a58e56e9777342fc9`.

## Nome in primo piano e rimozione dei duplicati — 28 ottobre 2026

Problema e stato precedente: il nuovo ritratto nella testata ripeteva la foto di Chi sono, il logo ripeteva quello della navigazione e il nome era meno evidente dei servizi. Il titolare ha chiesto una variante, l’ha esaminata in anteprima e ne ha poi autorizzato la pubblicazione.

Opzioni: nascondere gli elementi mantenendo markup e CSS, oppure rimuovere il blocco e le regole inutilizzate. Decisione: rimozione completa dalla hero e impaginazione a colonna con testo largo al massimo 760 px. Il nome ha circa il doppio della dimensione del sottotitolo; il testo dell’H1 resta “Grafologia forense e arti grafiche”. Motivazione: dare priorità all’identità professionale e mantenere i font, i colori e le geometrie approvati, senza nuovo codice superfluo.

Risultato verificato in anteprima: leggibilità desktop e telefono, nessun overflow, ritratto inferiore e logo di navigazione conservati. Head, script, modulo e sezioni successive invariati rispetto alla base. Rischio residuo: la resa dei font dipende dallo stesso caricamento Google Fonts già utilizzato; non sono stati introdotti nuovi fornitori. La pubblicazione richiede il check Cloudflare del commit integrato e la verifica sul dominio, da registrare nel resoconto di rilascio.

Rollback: commit di riferimento `206b782216e38edad4ae1c20ef40f208e567c423`; ripristinare solo `index.html` e conservare eventuali altre modifiche. Nessuna risorsa immagine è stata cancellata e non occorre modificare DNS o configurazione Cloudflare.

## Identità visiva della homepage — 28 ottobre 2026

La testata precedente, centrata e alta almeno quanto il viewport, rendeva meno immediata l’identità visiva condivisa con LinkedIn. Il titolare ha richiesto di riprenderne la nuova grafica.

La nuova composizione usa il blu e fasce diagonali CSS, il logo originale e il ritratto del sito. I testi restano elementi HTML, con un solo H1 dedicato alle due aree professionali, qualifiche leggibili e i due collegamenti già esistenti. La fotografia è caricata con priorità alta e riutilizza l’asset esistente da circa 47 KB. Non sono stati introdotti font, librerie o richieste a nuovi fornitori.

La prova a 768 px ha evidenziato una sovrapposizione nel menu: il breakpoint della navigazione compatta è stato portato a 960 px, conservando la logica e gli attributi ARIA esistenti. Le verifiche CSS in iframe a 320/390/768/1024 px e sul desktop non mostrano overflow orizzontale; menu e collegamento ai contatti sono stati provati nel browser. Non si tratta di un test su dispositivi fisici.

I controlli sul sorgente confermano modulo, script e sezioni successive invariati, metadati e JSON-LD conservati, ID unici, asset locali presenti e destinazioni dei pulsanti valide. Solo il lastmod della home cambia nella sitemap. Nessuna misura PageSpeed nuova: i valori del 27 ottobre non descrivono questo ridisegno.

Base per rollback: `e929b1ec4153e3825ca1b966d22d0d9b5ec98b69`. Il ripristino va limitato ai file del ridisegno per conservare eventuali modifiche successive.

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

Il 27/10 è riuscita la lettura aggiornata di Search Console nell'interfaccia Google. Conservati in archivio privato il confronto 27/09–24/10/2026 contro 30/08–26/09/2026 e le due estrazioni singole con 28 righe giornaliere ciascuna, stessi filtri e tutte le quattro metriche. Le somme giornaliere di clic e impressioni riconciliano i totali della proprietà. Le righe per pagina hanno aggregazione diversa e non sono sommabili per ricostruire il totale della proprietà; le righe query omettono una parte dei dati. Non sostituire il confronto di 28 giorni con “Oggi”, né attribuire a correzioni del 27/10 variazioni di periodi terminati il 24/10. Lo storico del 24 ottobre resta datato e distinto dalle nuove misurazioni.

La rettifica dell'indirizzo Reteimprese resta aperta: il percorso di autenticazione si è interrotto senza una sessione verificabile. Nessuna modifica del profilo e nessun messaggio di assistenza inviato.

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
