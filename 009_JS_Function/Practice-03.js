function getNum(num){
if(num > 10){
  return true;
}
else{
  return false;
}
}
const result = getNum(44);
// console.log(result);

// *********************************

function number(num){
  if(num % 13 == 0){
    return true;
  }
  else{
    return false;
  }
}
const result2 = number(55);
// console.log(result2);

// ***********************************

function bill(rice,curry,drinks){
const sumOfBill = rice + curry + drinks;
return sumOfBill;
}
const totalBill = bill(30, 40, 20);
// console.log(totalBill);

// **********************************

function eligibleAge(age){
  if(age > 18){
    return "Eligible for Voting";
  }
  else{
    return "not eligible";
  }
}
const eligibleAgeForVoting = eligibleAge(12);
// console.log(eligibleAgeForVoting);

// ****************************************

function getString(string){
return string.length;
}
const length = getString("Fighter");
// console.log(length);

// ************************************

function average(num1, num2, num3){
  const sum = num1 + num2 + num3;
  const avg = sum / 3;
  return avg;
}
const averageNum = average(10,5,5);
// console.log(averageNum);

// *****************************************

function isNegative(num){
if(num < 0){
  const multiply = num * -1;
  return multiply;
}
else{
  return "positive";
}
}
const result4 = isNegative(-2);
// console.log(result4);