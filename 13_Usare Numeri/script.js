var domande = 3;

var domandeRim = "[" + domande + " domande rimanenti]";

var nomeUtente = prompt("Come ti chiami? " + domandeRim);


domande -= 1;
domandeRim = "[" + domande + " domande rimanenti]";
var etaUtente = prompt("Quanti anni hai? " + domandeRim);

domande -= 1;
domandeRim = "[" + domande + " domande rimanenti]";
var cosaImparaUtente = prompt("Cosa hai imparato? ");


var message = "Ciao, mi chiamo " + nomeUtente;
message += ", ho " + etaUtente;
message += " anni e sto imparando " + cosaImparaUtente + ".";

document.write(message);