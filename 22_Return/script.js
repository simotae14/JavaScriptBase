function returnRandom(){
	var numRandom = Math.floor(Math.random() * 5) + 1;
	return numRandom;
};

document.write(returnRandom());
alert(returnRandom());

var varRandom = returnRandom();