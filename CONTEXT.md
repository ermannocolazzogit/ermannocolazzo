# Stato del progetto

Ultimo aggiornamento: 28 ottobre 2026.

## Ridisegno della testata — 28 ottobre 2026

- Base stabile: `e929b1ec4153e3825ca1b966d22d0d9b5ec98b69`, con check Cloudflare Pages riuscito sul progetto esistente `ermannocolazzo`.
- Su richiesta del titolare, la homepage riprende l’identità della nuova copertina LinkedIn: blu, fasce diagonali, logo originale e ritratto fotografico già presente nel sito. Testo HTML, grafica CSS, nessun nuovo asset o dipendenza.
- H1 della home: “Grafologia forense e arti grafiche”; nome e qualifiche restano visibili. Apertura sintetica e pulsante di contatto in evidenza. Title, description, canonical e JSON-LD conservati.
- Composizione desktop con fotografia affiancata; su telefono ritratto compatto e pulsanti a tutta larghezza. Menu compatto fino a 960 px per evitare la sovrapposizione osservata a 768 px.
- Verifica nel browser alle larghezze iframe 320, 390, 768 e 1024 px e desktop a 1363 px: assenza di overflow orizzontale; screenshot di controllo; menu mobile e tablet apre/chiude e si richiude scegliendo una voce. La verifica usa viewport CSS tramite iframe, senza emulazione di dispositivi fisici.
- Modulo contatti, script di consenso Maps e tutte le sezioni successive alla testata identici alla base. Sitemap: aggiornato soltanto il lastmod della home al 28 ottobre.
- Rollback: ripristinare i file modificati dal commit di base sopra indicato, preservando le modifiche successive eventualmente introdotte da altri interventi.

## Correzioni del 27 ottobre 2026

- Riferimento precedente alle correzioni: `70861e953762381f703da06d4d4fffbcece3c9f8`, branch `main`. Lo snapshot dei 31 file coincide con l'albero Git `7a8d57585c425862b6d2eb5669ded262cb5a9d64`; nessuna modifica locale preesistente e nessuna PR aperta al controllo iniziale.
- Il check GitHub Cloudflare Pages del commit di riferimento risulta completato con successo per il progetto `ermannocolazzo`. Gli elementi HTML e il CSS verificati sul dominio pubblico corrispondono al sorgente. Non è stata modificata la configurazione interna Cloudflare.
- Corretto il ciclo di consenso Maps: il rifiuto rimuove l'iframe e ripristina il segnaposto; una scelta memorizzata non riapre il banner; “Carica la mappa” registra la stessa accettazione del banner; riaprire le scelte conserva il consenso precedente fino alla nuova decisione.
- Rimossi il dato nazionale “8” e le note di confronto rimaste dopo la rimozione dell'affermazione sull'unicità. Restano le iscrizioni professionali personali e i collegamenti agli albi. La griglia della homepage segue le tre iscrizioni rimaste.
- Nella pagina dei costi è esplicitato il confine fra primo inquadramento della fattibilità/preventivo gratuiti e analisi, parere o relazione su incarico retribuito. Rimosso soltanto il blocco FAQPage non rappresentato come domande visibili; mantenuti WebPage e BreadcrumbList.
- Sitemap: sempre 11 URL. `lastmod` del 27/10 per homepage, arti grafiche e costi; del 26/10 per le altre pagine interessate dai collegamenti alla nuova pagina costi e per le FAQ riviste il 26/10. Nessuna data modificata per informative o per un semplice cambio del parametro di versione CSS.
- README allineato ai file esistenti e al redirect attuale di `/mappa-sito`.
- Test locali superati: riproduzione del precedente difetto e 13 scenari di consenso, sintassi di 11 script inline, 13 pagine HTML, 11 URL di sitemap, JSON-LD, collegamenti e frammenti, metadati invariati, modulo identico al precedente, `git diff --check`.
- Pubblicazione: PR #10 integrata in `main` con commit `a4b2ecb87eecba4144586a26c58135ce1be7882c`; check Cloudflare Pages riuscito e sorgente effettivamente verificato sul dominio pubblico.
- Le anteprime Cloudflare eseguono `301` verso il dominio canonico e non permettono test isolati. Sulla produzione aggiornate sono state verificate 10 fasi del consenso con mouse e tastiera: rifiuto, ricarica, caricamento dal segnaposto, persistenza dell'accettazione, revoca immediata, ripristino e nuova accettazione senza iframe duplicati. Stato finale lasciato su rifiuto.
- Verifica HTTP dopo il deploy: tutte le 11 pagine canoniche `200`, sitemap identica al sorgente, title/description/H1/canonical e JSON-LD corrispondenti, modulo identico al sorgente, quattro varianti della homepage con `301` al canonico. Desktop senza overflow orizzontale; griglia delle tre iscrizioni verificata nel browser. Resa mobile della homepage osservata nella nuova prova Lighthouse, con entrambi i pulsanti iniziali disponibili; matrice interattiva completa smartphone/tablet **NON VERIFICATA**.
- Nuovo test PageSpeed homepage del 27/10 ore 07:49 CET: mobile 98/97/100/100, LCP 1,8 s, CLS 0,034, TBT 0 ms; desktop 99/97/100/100, LCP 0,8 s, CLS 0,011, TBT 0 ms. Confronto con la prova delle 06:36 limitato a due singole misure: non attribuire la differenza alla sola correzione di Maps. Dati CrUX ancora assenti.

## Riscontri pubblici del 27 ottobre prima delle correzioni

- Le 11 pagine canoniche della sitemap rispondono `200`; le varianti della homepage HTTP e senza `www` convergono con un solo `301` a HTTPS `www`.
- Nessun link interno rotto, frammento inesistente o riferimento HTTP rilevato nei collegamenti e negli asset HTML acquisiti. Title, description, canonical e singolo H1 presenti sulle 11 pagine della sitemap.
- `/mappa-sito` e `/mappa-sito/` eseguono oggi `301` verso `/faq/`; il precedente stato `410` descritto nello storico del 24/10 è superato.
- I feed `/feed`, `/feed/`, `/rss/`, `/atom/` e le query `?format=feed&type=rss` / `atom` rispondono `410`; una URL inesistente risponde `404`.
- PageSpeed Insights homepage, 27/10 ore 06:36 CET, prima delle correzioni: mobile prestazioni 87, accessibilità 97, best practice 100, SEO 100; desktop 99/97/100/100. LCP mobile 3,2 s, desktop 0,8 s; CLS 0,052 e 0,029; TBT 0 ms. È un singolo test di laboratorio per dispositivo, non un dato di campo né una misura delle posizioni Google. CrUX non espone dati sufficienti.
- DNS pubblico: nameserver Cloudflare, MX `10 mail.register.it.`, nessun SPF restituito fra i TXT del dominio e nessun record DMARC. Nessuna modifica DNS; l'eventuale protezione email richiede prima l'inventario degli invii autorizzati.
- Reteimprese pubblica ancora “Via Muro 3” invece di “Via Muro Leccese 3”: la rettifica richiede accesso al profilo e non è stata eseguita dal codice del sito.

## Dati confrontabili e limiti di accesso

GSC Wizard restituisce piano/prova non attivi. Il 27/10 l'accesso all'interfaccia gratuita Google Search Console è riuscito. Raccolti tre export Excel originali: confronto 27/09–24/10/2026 contro 30/08–26/09/2026 e due estrazioni singole con le rispettive serie giornaliere. Entrambi i periodi coprono 28 giorni, ricerca Web (basato su testo), tutti i Paesi e dispositivi, senza filtri di pagina o query. Le somme giornaliere coincidono con i totali della proprietà. File e risultati analitici sono conservati in archivio privato; lo storico sotto resta quello del 24/10.

La rettifica Reteimprese non è stata eseguita: il percorso di accesso al pannello si è interrotto senza una sessione autenticata verificabile. Nessun dato del profilo è stato modificato.

Per ogni nuova estrazione registrare proprietà `sc-domain:ermannocolazzo.it`, ricerca Web, intervalli espliciti di 28 giorni completi e contigui, stessi filtri Paese/dispositivo, data di estrazione e ultimo giorno consolidato. Conservare totali della proprietà, dati giornalieri, pagine e query, distinguendo le query anonime non esportate. I totali non vanno ricavati sommando le righe per query o pagina: queste ultime hanno un'aggregazione diversa dalla proprietà. Le finestre raccolte terminano prima delle correzioni del 27/10 e non ne misurano l'effetto. Le esportazioni analitiche restano in un archivio privato, non in questo repository pubblico.

## Storico verificato il 24 ottobre 2026

### Stato tecnico rilevato il 24 ottobre

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

### Google Search Console — rilevazione storica del 24 ottobre

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

### Limiti registrati il 24 ottobre

- Core Web Vitals di campo: indisponibili per traffico insufficiente nel Chrome UX Report; non costituisce un errore del sito.
- PageSpeed Insights: tentativo eseguito, ma API Google in quota esaurita (`429`); punteggi Lighthouse e metriche di laboratorio **NON VERIFICATI**.
- Configurazione interna Cloudflare (progetto, regole, SSL/TLS, DNS e impostazioni email-obfuscation): osservata solo dagli effetti pubblici, non modificata e **NON VERIFICATA** nel pannello.
- Invio reale del modulo Formspree: non eseguito durante l'audit SEO, per evitare trasmissioni di dati e messaggi di prova non richiesti.

### Intervento dell'audit del 24 ottobre

- Aggiunto al menu mobile lo stato accessibile `aria-expanded` e il collegamento `aria-controls`, sincronizzati in apertura e chiusura.
- Allineato il `lastmod` FAQ in sitemap alla modifica del 3 ottobre 2026.
- Aggiunta la documentazione tecnica mancante (`README.md`, `CONTEXT.md`, `LEARNING.md`).
