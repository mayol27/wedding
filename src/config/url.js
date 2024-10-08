const params = new URLSearchParams(document.location.search);
const user = params.get("rsvp");
var name;
var rsvp;
var eInvite;

switch (user) {
  // jon
  case "bes":
    name = "BES 2.0";
    rsvp = 1;
    break;
  case "ccs":
    name = "ccs family";
    rsvp = 1;
    break;
  case "johnray":
    name = "mr john ray d. anuada";
    rsvp = 3;
    break;
  case "dianne":
    name = "ms. dianne overland";
    rsvp = 1;
    break;
  case "ruelJosephine":
    name = "mr. ruel segismar & mrs. josephine m. overland";
    rsvp = 2;
    break;
  case "abigail":
    name = "ms. ma. abigail lynn padayao";
    rsvp = 1;
    break;
  case "kimbyMarlyn":
    name = "mr. kimby & ms. marlyn";
    rsvp = 2;
    break;
  case "wilsonMarian":
    name = "mr. & mrs. segismar";
    rsvp = 2;
    break;
  case "christiangrace":
    name = "mr. christian & ms. grace";
    rsvp = 2;
    break;
  case "manalon":
    name = "mr. christian manalon";
    rsvp = 1;
    break;
  case "engbino":
    name = "mr. engbino";
    rsvp = 1;
    break;
  case "reyMayol":
    name = "mr. rey mayol";
    rsvp = 2;
    break;
  case "ricoBrenda":
    name = "mr. rico & mrs. brenda";
    rsvp = 2;
    break;
  case "brenda":
    name = "mr. jeremiah & ms. brenda";
    rsvp = 2;
    break;
  case "ilar":
    name = "mr. carlito & mrs. ilar";
    rsvp = 2;
    break;
  case "ianReeka":
    name = "mr. & mrs. valle";
    rsvp = 2;
    break;
  case "bryanChristine":
    name = "mr. & mrs. segismar";
    rsvp = 2;
    break;
  case "lebumfacil":
    name = "mr. & mrs. lebumfacil";
    rsvp = 2;
    break;
  case "maribel":
    name = "mrs. maribel";
    rsvp = 1;
    break;
  case "harveyJia":
    name = "mr. harvey & ms jia";
    rsvp = 1;
    break;
  case "therese":
    name = "ms. therese anne";
    rsvp = 1;
    break;
  case "robertRoame":
    name = "mr. robert & ms. roame";
    rsvp = 2;
    break;
  case "jordan":
    name = "mr. jordan segismar";
    rsvp = 1;
    break;
  case "kuya":
    name = "mr. & mrs. mayol";
    rsvp = 2;
    break;
  case "jeff":
    name = "mr. jeff russel";
    rsvp = 2;
    break;
  case "dave":
    name = "mr. dave";
    rsvp = 2;
    break;
  case "dan":
    name = "mr. dan";
    rsvp = 2;
    break;
  case "magalso":
    name = "mr. john magalso";
    rsvp = 2;
    break;
  case "raymond":
    name = "mr. raymond";
    rsvp = 1;
    break;
  case "tanilon":
    name = "mr. & mrs. tanilon";
    rsvp = 2;
    break;
  case "gonzaga":
    name = "mr. gonzaga";
    rsvp = 1;
    break;
  case "caren":
    name = "Ms. Caren";
    rsvp = 1;
    break;
  case "anjo":
    name = "mrs. anjo";
    rsvp = 1;
    break;
  case "jeonghoon":
    name = "mr. jeonghoon";
    rsvp = 1;
    break;
  case "labaya":
    name = "mr. & mrs. labaya";
    rsvp = 2;
    break;
  case "gulayan":
    name = "mr. & mrs. gulayan";
    rsvp = 2;
    break;
  case "pino":
    name = "mr. andrew pino & mr. philip pino";
    rsvp = 2;
    break;
  case "jorina":
    name = "mrs. jorina mayol";
    rsvp = 2;
    break;
  case "francisco":
    name = "mrs. jorina m. francisco";
    rsvp = 2;
    break;
  case "moria":
    name = "mr. & mrs. moria";
    rsvp = 2;
    break;

  // mel
  case "ronaJel":
    name = "mrs. rona jel";
    rsvp = 1;
    break;
  case "lowellaJen":
    name = "ms. lowella jen";
    rsvp = 1;
    break;
  case "deGracia":
    name = "mr. & mrs. de gracia";
    rsvp = 2;
    break;
  case "yap":
    name = "mr. & mrs. yap";
    rsvp = 2;
    break;
  case "philbo":
    name = "mr. philbo";
    rsvp = 1;
    break;
  case "dean":
    name = "mr. dean";
    rsvp = 1;
    break;
  case "rhox":
    name = "mr. rhox";
    rsvp = 1;
    break;
  case "kevin":
    name = "mr. kevin rey";
    rsvp = 1;
    break;
  case "myy":
    name = "myy's";
    rsvp = 1;
    break;
  case "george":
    name = "mr. george";
    rsvp = 1;
    break;
  case "dennis":
    name = "mr. dennis";
    rsvp = 1;
    break;
  case "lorrie":
    name = "mrs. lorrie dane";
    rsvp = 1;
    break;
  case "dannielle":
    name = "ms. dannielle mae";
    rsvp = 1;
    break;
  case "marcelina":
    name = "mrs. marcelina";
    rsvp = 1;
    break;
  case "alona":
    name = "ms. alona";
    rsvp = 1;
    break;
  case "corazon":
    name = "ms. corazon";
    rsvp = 1;
    break;
  case "william":
    name = "mr. william";
    rsvp = 1;
    break;
  case "fidel":
    name = "mr. fidel";
    rsvp = 1;
    break;
  case "wendel":
    name = "mr. wendell";
    rsvp = 1;
    break;
  case "bernard":
    name = "mr. bernard";
    rsvp = 2;
    break;
  case "dunn":
    name = "mr. & mrs. dunn";
    rsvp = 2;
    break;
  case "jasmine":
    name = "ms. jasmine";
    rsvp = 1;
    break;
  case "alguno":
    name = "mr. & mrs. alguno";
    rsvp = 2;
    break;
  case "diacoma":
    name = "mr. & mrs. diacoma";
    rsvp = 2;
    break;
  case "catherine":
    name = "ms. catherine";
    rsvp = 1;
    break;
  case "seno":
    name = "mr. & mrs. seno";
    rsvp = 2;
    break;
  case "flor":
    name = "mrs. flor";
    rsvp = 1;
    break;
  case "darylGrace":
    name = "Daryl & Grace";
    rsvp = 2;
    break;
  case "raymond":
    name = "mr. raymond";
    rsvp = 1;
    break;
  case "jerry":
    name = "ms. Jerry";
    rsvp = 1;
    break;
  case "jen":
    name = "ms. jen";
    rsvp = 1;
    break;
  case "joan":
    name = "mrs. joan";
    rsvp = 1;
    break;
  case "joy":
    name = "mrs. joy";
    rsvp = 1;
    break;
  case "joseph":
    name = "mr. joseph";
    rsvp = 1;
    break;
  case "paul":
    name = "mr. paul";
    rsvp = 1;
    break;
  case "allen":
    name = "mr. allen";
    rsvp = 1;
    break;
  case "bantang":
    name = "mr. bantang";
    rsvp = 1;
    break;
  case "paulCharlotte":
    name = "mr. paul & mrs. charlotte";
    rsvp = 1;
    break;
  case "diaz":
    name = "mr. & mrs. diaz";
    rsvp = 2;
  case "sanchez":
    name = "mr. & mrs. sanchez";
    rsvp = 2;
    break;
  case "mekai":
    name = "ms. mekai";
    rsvp = 1;
    break;
  case "albert":
    name = "mr. albert";
    rsvp = 1;
    break;
  case "wilfredo":
    name = "mr. wilfredo";
    rsvp = 1;
    break;
  case "merlie":
    name = "ms. merlie";
    rsvp = 1;
    break;
  case "kurbien":
    name = "mr. kurbien";
    rsvp = 1;
    break;
  case "thelma":
    name = "ms. thelma";
    rsvp = 1;
    break;
  case "mingla":
    name = "3 kings mr. minglanilla";
    rsvp = 1;
    break;
  case "monique":
    name = "ms. monique anne ylagan";
    rsvp = 1;
    break;
  //
  case "jm":
    name = "john & mel";
    rsvp = 1;
    break;
  // eInvite
  case "boysen":
    name = "mr. and mrs. segismar";
    eInvite = 1;
    break;
  case "luz":
    name = "mr. and mrs. luz";
    eInvite = 1;
    break;

  default:
    name = "error";
    rsvp = "error";
}

const contentClass = document.getElementById("content-wedding");
const brokenClass = document.getElementById("broken-link");
const eInviteClass = document.getElementById("eInvite-link");
const rsvpClass = document.getElementById("rsvpClass-link");

if (name === "error") {
  contentClass.style.display = "none";
} else {
  brokenClass.style.display = "none";
}

if (eInvite === 1) {
  rsvpClass.style.display = "none";
} else {
  eInviteClass.style.display = "none";
}

document.getElementById("name").innerHTML = name;
document.getElementById("names").innerHTML = name;
document.getElementById("rsvp").innerHTML = rsvp;
