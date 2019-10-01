//console.log("You made it to the Max of two numbers.js");
//console.log("You made it console");

let stop = false;

function testNaN (number) {

if (isNaN (number) ) {
  stop = true;
  return "Type a real number"
} else {
  return "Input Validated"
  }

}

function greater (number1, number2) {
if (number1 == number2) return 'Equal';
return(number1 > number2) ? 'Number 1 is greater' : 'Number 2 is greater';
}

function checkboxes() {
 let checkbox1, checkbox2, checkbox3;
 checkbox1 = document.getElementById('Checkbox1').checked;
 checkbox2 = document.getElementById('Checkbox2').checked;
 checkbox3 = document.getElementById('Checkbox3').checked;

if ( checkbox1 == true ) {
  document.getElementById('checkbox1_answer').innerHTML = "True!";
} else {
  document.getElementById('checkbox1_answer').innerHTML = "Answer?";
}

if ( checkbox2 == true ) {
  document.getElementById('checkbox2_answer').innerHTML = "False!";
} else {
  document.getElementById('checkbox2_answer').innerHTML = "Answer?";
}
if ( checkbox3 == true ) {
  document.getElementById('checkbox3_answer').innerHTML = "Equal!";
} else {
  document.getElementById('checkbox3_answer').innerHTML = "Answer?";
 }
}

function main(){

  let firstNumber, secondNumber, text;

  firstNumber = document.getElementById('textfield1').value;

  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById('textfield2').value;
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

if (stop == true) {
  document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number.";
} else {
  console.log("The display geometry is", greater (firstNumber, secondNumber) );
  document.getElementById('answer').innerHTML = "" + greater (firstNumber, secondNumber);
}
}
