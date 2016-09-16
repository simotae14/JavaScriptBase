/*
Programma che genera un numero random e permette all'utente di
indovinarlo, fornendogli 2 tentativi
*/

// assumiamo che l'utente non risponda correttamente
var rispostaEsatta = false;

// generiamo un numero da 1 a 5
var numRandom = Math.floor(Math.random() * 5) + 1;

// primo tentativo
var tentativo = prompt("Qual'è il numero?");

/*
verifichiamo se:
1. Ha risposto correttamente
2. Ha inserito un numero minore
3. Ha inserito un numero maggiore
*/
if(parseInt(tentativo) === numRandom) {
    rispostaEsatta = true;
} else if(parseInt(tentativo) < numRandom) {
    var numMin =  prompt("Prova ancora. Il numero è maggiore di " + tentativo);
    if(parseInt(numMin) === numRandom) {
        tentativo = parseInt(numMin);
        rispostaEsatta = true;
    }
} else if(parseInt(tentativo) > numRandom) {
    var numMag =  prompt("Prova ancora. Il numero è minore di " + tentativo);
    if(parseInt(numMag) === numRandom) {
        tentativo = parseInt(numMag);
        rispostaEsatta = true;
    }
}

// verifichiamo se la risposta è corretta e facciamo apparire un messaggio    
if(rispostaEsatta){    
    document.write("Bravo! Era il numero "+ tentativo);
} else {
    document.write("Peccato! Era il numero "+ numRandom);    
}