var one = "1";
var two = "2";
var sum = "+";
var sub = "-";
var mult = "*";
var divis = "/";
var a = document.getElementById("x");
var number = [" ", " ", " "];
var i = 0;
var result = 0;
var condition = true;

function wOne() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += one;
		number[i] += one;
	}
}

function wTwo() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += two;
		number[i] += two;
	}
}

function wThree() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += "3";
		number[i] += "3";
	}
}

function wFour() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += "4";
		number[i] += "4";
	}
}

function wFive() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += "5";
		number[i] += "5";
	}
}

function wSix() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += "6";
		number[i] += "6";
	}
}

function wSeven() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += "7";
		number[i] += "7";
	}
}

function wEight() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += "8";
		number[i] += "8";
	}
}

function wNine() {
	if (condition == true || number[0] == " ") {
		a.innerHTML += "9";
		number[i] += "9";
	}
}

function wZeru() {
	if (condition == true || number[0] == " ") {
		if (i ==2){
		a.innerHTML += "0";
		number[i] += "0";
	}
	}
}

document.getElementById("wsum").addEventListener("click", wSum);

function wSum() {
	if (i == 0 && number[0] != " ") {
		i = 2;
		number[1] = sum;
		a.innerHTML = number[0] + number[1];
		condition = true;
	}
}

document.getElementById("wsub").addEventListener("click", wSub);

function wSub() {
	if (i == 0 && number[0] != " ") {
		i = 2;
		number[1] = sub;
		a.innerHTML = number[0] + number[1];
		condition = true;
	}
}

document.getElementById("wmult").addEventListener("click", wMult);

function wMult() {
	if (i == 0 && number[0] != " ") {
		i = 2;
		number[1] = mult;
		a.innerHTML = number[0] + number[1];
		condition = true;
	}
}

document.getElementById("wdiv").addEventListener("click", wDiv);

function wDiv() {
	if (i == 0 && number[0] != " ") {
		i = 2;
		number[1] = divis;
		a.innerHTML = number[0] + number[1];
		condition = true;
	}
}

document.getElementById("wequal").addEventListener("click", wEqual);

function wEqual() {
	if (i == 2 && number[2] != " " && number[1] == sum) {
		result = parseInt(number[0]) + parseInt(number[2]);
		a.innerHTML = result;
		number[0] = result.toString();
		number[1] = " ";
		number[2] = " ";
		i = 0;
		condition = false;
	}
	else if (i == 2 && number[2] != " " && number[1] == sub) {
		result = parseInt(number[0]) - parseInt(number[2]);
		a.innerHTML = result;
		number[0] = result.toString();
		number[1] = " ";
		number[2] = " ";
		i = 0;
		condition = false;
	}
	else if (i == 2 && number[2] != " " && number[1] == mult) {
		result = parseInt(number[0]) * parseInt(number[2]);
		a.innerHTML = result;
		number[0] = result.toString();
		number[1] = " ";
		number[2] = " ";
		i = 0;
		condition = false;
	}
	else if (i == 2 && number[2] != " " && number[1] == divis) {
		result = parseInt(number[0]) / parseInt(number[2]);
		a.innerHTML = result;
		number[0] = result.toString();
		number[1] = " ";
		number[2] = " ";
		i = 0;
		condition = false;
	}

}

function AC(){
	a.innerHTML = " ";
	number[0] = " ";
	number[1] = " ";
	number[2] = " ";
	i = 0;
}
