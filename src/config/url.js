const params = new URLSearchParams(document.location.search);
console.log("%c Line:2 🍎 params", "color:#ea7e5c", params);
const user = params.get("rsvp");
var name;
var rsvp;

switch (user) {
  case "me":
    name = "mr. and mrs. john";
    rsvp = 2;
    break;
  case "we":
    name = "mr. and mrs. mel";
    rsvp = 2;
    break;
  default:
    name = "error";
    rsvp = "error";
}

document.getElementById("name").innerHTML = name;
document.getElementById("rsvp").innerHTML = rsvp;
