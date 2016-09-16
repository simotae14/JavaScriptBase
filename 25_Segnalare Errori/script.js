function returnRandom(numMin, numMax){
	if(isNaN(numMin) || isNaN(numMax)){
		throw new Error("Il parametro non è un numero, inserirlo di nuovo.");
	}
	var numRandom = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
	return numRandom;
};

console.log(returnRandom(10,20));
console.log(returnRandom('cinque',20));
console.log(returnRandom(100,200));
console.log(returnRandom(1000,'duemila'));
console.log(returnRandom(17,30));