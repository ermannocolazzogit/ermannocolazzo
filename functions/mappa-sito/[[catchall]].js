// La vecchia mappa del sito HTML non esiste piu', ma l'URL conserva
// posizionamento su Google (circa 28 impressioni in posizione 8,9 negli
// ultimi 3 mesi). Un 410 chiede a Google di rimuoverlo: con un 301 quel
// piazzamento viene invece trasferito alla pagina FAQ, che e' il
// sostituto piu' vicino per intento di consultazione.
export function onRequest() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "https://www.ermannocolazzo.it/faq/",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
