var limInferiore = parseInt(prompt("Inserisci il limite inferiore del numero Random"));
var limSuperiore = parseInt(prompt("Inserisci il limite superiore del numero Random"));

var randomNum = Math.floor(Math.random() * (limSuperiore - limInferiore + 1)) + limInferiore;

document.write("Il numero random generato è " + randomNum + " che va da " + limInferiore + " a "+ limSuperiore);