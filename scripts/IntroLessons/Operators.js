console.log("Operators You made it");

function sinmpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtraction = numberA - numberB;
  let mulitplying = numberA * numberB;
  let division = numberA / numberB;
  let modulus = numberA % numberB;
  console.log(numberA, numberB, 'adding', adding);
  console.log(numberA, numberB, 'subtraction',subtraction);
  console.log(numberA, numberB, 'mulitplying', mulitplying);
  console.log(numberA, numberB, 'division',division);
  console.log(numberA, numberB, 'modulus',modulus);
}

//skin count by  for  times starting at
function skipCointing (interval, times, startingNumber) {
  for (let i = 1; i <= times; i++) {
      startingNumber = startingNumber + interval
      console.log(startingNumber);
  }
}

function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    numberStart += skipCount;
    console.log(numberStart);

  }

}

function looseEquality (firstOperand, secondOperand) {
  console.log(firstOperand == secondOperand);
}

function strictEquality (firstOperand, secondOperand) {
  console.log(firstOperand === secondOperand);
}

function customerType (points) {
  return type = points >= 100 ? 'gold' : 'silver'
}

let number = [4, 7, 13, 99, 0, 100, 5, 1, '1'];




//sinmpleOperators(number[0], number[5]);
//sinmpleOperators(number[2], number[3]);
//sinmpleOperators(number[3], number[7]);

//interval, times, startingNumber
//skipCointing (number[0], number[6], number[1]);
//skipCointing (number[5], number[3], number[2]);
//howManyTimes (number[0], number[5], number[1]);
//looseEquality (number[7], number[8]);
//strictEquality (number[7], number[8]);
console.log(customerType (number[5]));
