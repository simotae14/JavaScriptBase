/*
Questo programma consiste nel generare un quiz:
1. Con 5 domande
2. Che conti le risposte corrette
3. Che mostri un messaggio con le risposte esatte
4. Che dia una valutazione all'utente in base alle risposte
*/

// creare una variabile per le risp esatte
var rispEsatte = 0;

// domande
var risposta1 = prompt("Che linguaggio si usa per inserire contenuto in un sito?");

if(risposta1.toUpperCase() == "HTML"){
    rispEsatte += 1;
}

var risposta2 = prompt("Che linguaggio si usa per modificare il layout del contenuto in un sito?");

if(risposta2.toUpperCase() == "CSS"){
    rispEsatte += 1;
}

var risposta3 = prompt("Che linguaggio si usa per interagire con l'utente?");

if(risposta3.toUpperCase() == "JAVASCRIPT"){
    rispEsatte += 1;
}

var risposta4 = prompt("Che frutto è il simbolo della Apple?");

if(risposta4.toUpperCase() == "MELA"){
    rispEsatte += 1;
}

var risposta5 = prompt("Chi ha fondato la Microsoft?");

if(risposta5.toUpperCase() == "BILL GATES"){
    rispEsatte += 1;
}

// risposte esatte
document.write("Hai indovinato " + rispEsatte + " risposte. ");

// punteggio utente
if(rispEsatte >= 4){
    document.write("Hai guadagnato 2000 punti.")
} else if (rispEsatte >1){
    document.write("Hai guadagnato 1000 punti.")
} else {
    document.write("Non hai guadagnato niente.");
}