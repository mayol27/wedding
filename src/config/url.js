const params = new URLSearchParams(document.location.search);
const user = params.get("rsvp");
var name;
var rsvp;

switch (user) {
  // jon
  case "bes":
    name = "BES 2.0";
    rsvp = 1;
    break;
  case "arah":
    name = "ms. arah niÑa";
    rsvp = 1;
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
    name = "mr. wilson & mrs. marian";
    rsvp = 2;
    break;
  case "christiangrace":
    name = "mr. christian & ms. grace";
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
  // mayol
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
    name = "mr. ian & mrs. reeka";
    rsvp = 2;
    break;
  case "bryanChristine":
    name = "mr. bryan & mrs. christine";
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
  case "robertRoame":
    name = "mr. robert & ms. roame";
    rsvp = 2;
    break;
  case "jordan":
    name = "mr. jordan seigmar";
    rsvp = 1;
    break;
  case "isha":
    name = "isha";
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
  case "mayol":
    name = "mrs. & mrs. mayol";
    rsvp = 2;
    break;
  case "mayol":
    name = "mrs. & mrs. mayol";
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
  case "marcelina":
    name = "mrs. marcelina";
    rsvp = 1;
    break;
  case "alona":
    name = "ms. alona";
    rsvp = 1;
    break;
  case "coraon":
    name = "ms. coraon";
    rsvp = 1;
    break;
  case "coraon":
    name = "ms. coraon";
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
    name = "mr. wendel";
    rsvp = 1;
    break;
  case "bernard":
    name = "mr. bernard";
    rsvp = 1;
    break;
  default:
    name = "error";
    rsvp = "error";
}

const div = document.getElementById("hiddenDiv");

if (name === "error") {
  div.style.display = "none";
} else {
  div.style.display = "block";
}

document.getElementById("name").innerHTML = name;
document.getElementById("rsvp").innerHTML = rsvp;
