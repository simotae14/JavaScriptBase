var numRandom = Math.floor(Math.random() * 5) + 1;

var tentativo = prompt("Qual'è il numero?");

if(parseInt(tentativo) === numRandom) {
    document.write("Bravo! Era il numero "+ tentativo);
} else {
    document.write("Peccato! Era il numero "+ numRandom);    
}