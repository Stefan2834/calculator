/* var text = document.getElementById("text");
var input = document.getElementById("input");
var submit = document.getElementById("submit");
var btn = document.getElementById("btn");


const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  var myObj = JSON.parse(this.responseText);
  text.innerHTML = myObj.number;
}

xmlhttp.open("GET", "calculator.json");
xmlhttp.send(); */

var text = document.getElementById("text");
var operator = document.querySelectorAll(".operator");
var equal = document.getElementById("equal");
var number = document.querySelectorAll(".number");
var ce = document.getElementById("ce");
var c = document.getElementById("c");


var firstOperand = "";
var operand = '';
var secondOperand = '';
var operation = '';
text.innerHTML = '0';

number.forEach(number => {
  number.addEventListener("click", () => {
    if(operand === "") {
      firstOperand += number.innerHTML;
      text.innerHTML = firstOperand;
    } else {
      secondOperand += number.innerHTML;
      text.innerHTML = firstOperand + operand + secondOperand;
    }
  })
})


operator.forEach(operator => {
  operator.addEventListener("click", () => { 
    if(firstOperand === '' && operator.innerHTML === '-') {
      firstOperand = '-';
      text.innerHTML = firstOperand;
    } else if(firstOperand !== "" && firstOperand !== '-' && operand === '' ) {
      operand = operator.innerHTML;
      text.innerHTML = firstOperand + operand;
    }
  })
})

class Calculator {
  constructor (first,second,) {
    this.first = Number(first);
    this.second = Number(second);
  } plus() {
    return this.first + this.second;
  } minus() {
    return this.first - this.second;
  } inmultit () {
    return this.first * this.second;
  } impartit () {
    return this.first / this.second;
  } 
}

equal.addEventListener("click", () => {
  let calc = new Calculator(firstOperand,secondOperand);
  if(operand === '+') {
    firstOperand = calc.plus();
  } else if (operand === '-') {
    firstOperand = calc.minus();
  } else if (operand === '*') {
    firstOperand = calc.inmultit();
  } else if(operand === '/') {
    firstOperand = calc.impartit();
  }
  text.innerHTML = firstOperand;
  if(isNaN(firstOperand)) {
    text.innerHTML = '0';
    firstOperand = '';
    alert('Wrong Input');
  }
  secondOperand = '';
  operand = '';
})
ce.addEventListener("click", function () {
  firstOperand = '';
  secondOperand = '';
  operand = '';
  text.innerHTML = '0';
})

c.addEventListener("click", function () {
  if(operand === '') {
    firstOperand = firstOperand.slice(0,-1);
    text.innerHTML = firstOperand;
  } else if (secondOperand === '') {
    operand = '';
    text.innerHTML = firstOperand;
  } else if(secondOperand !== '') {
    secondOperand = secondOperand.slice(0,-1);
    text.innerHTML = firstOperand + operand + secondOperand;
  }
})
