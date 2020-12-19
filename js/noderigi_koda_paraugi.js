//šis fails netiek izmantots sitēmā
//tas satur noderīgus koda paraugus



//atsevišķa funkcija kas veic tikai fetch
//noderīgi lai atdalītu fetch funkcionalitāti no pārējām funkcijām
async function iegutDatusNoApi(url)
{
  let datiNoServera = await fetch(url);
  let datiJson = await datiNoServera.json();
  return datiJson;
}
//funkciju var izsaukt šādi
//let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');


//ar šo funkciju var pamēģināt notestēt vai darbojas iepriekšējā funkcija iegutDatusNoApi()
async function testIegutDatusNoApi()
{
  let datiJson = await iegutDatusNoApi('https://armandspucs.github.io/majas-darbs-1/data/datoruDB.json');

  console.log(datiJson);
}






