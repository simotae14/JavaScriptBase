function returnRandom(numMin, numMax){
	var numRandom = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
	return numRandom;
};

alert(returnRandom(10,20));
alert(returnRandom(1000,1500));
alert(returnRandom(100000,200000));
