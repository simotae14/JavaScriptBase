var nomeUtente = prompt("Come ti chiami?");

var etaUtente = prompt("Quanti anni hai?");

var cosaImparaUtente = prompt("Cosa hai imparato?");


var message = "Ciao, mi chiamo " + nomeUtente;
message += ", ho " + etaUtente;
message += " anni e sto imparando " + cosaImparaUtente + ".";

document.write(message);