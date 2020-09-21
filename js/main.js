


async function raditNoliktavasDatus(tipsAtlase)
{
    //raditNoliktavasDatus('aprikojums');  
    //raditNoliktavasDatus('viela');

  let datiNoServera = await fetch('../json/noliktava.json');
  let datiJson = await datiNoServera.json();

  let datiNoliktava = datiJson['noliktava'];
  
  let tabula = document.querySelector('#pub_data tbody');
  tabula.innerHTML = '';

  //datiNoliktava.length - saņemto ierakstu skaits
  //datiNoliktava['0'] - pirmais ieraksts
  //datiNoliktava['0']['Nosaukums'] - pirmā ieraksta nosaukums

  for (i = 0; i < datiNoliktava.length; i++)
  {
    //i - loop indekss 0,1,2,3,4....

      tipsClass = datiNoliktava[i]['Tips'];
      tipsClass = tipsClass.toLowerCase();
      tipsClass = tipsClass.replace('ī','i');

      if(tipsAtlase!=undefined && tipsAtlase!=tipsClass)
      {
        continue;
      }

      tabula.innerHTML = tabula.innerHTML+`
      <tr class="`+tipsClass+`">
      <td> `+datiNoliktava[i]['ID']+` </td>
      <td> `+datiNoliktava[i]['Nosaukums']+` </td>
      <td> `+datiNoliktava[i]['Tips']+` </td>
      <td> `+datiNoliktava[i]['Apakštips']+` </td>
      <td> `+datiNoliktava[i]['Skaits']+` </td>
      <td> `+datiNoliktava[i]['Svars']+` </td>
      <td> `+datiNoliktava[i]['Komentāri']+` </td>
      </tr>`;


  }//loop beigas


}//beidzas raditNoliktavasDatus(dati)








