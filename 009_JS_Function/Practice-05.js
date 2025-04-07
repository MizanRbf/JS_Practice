function odd (numbers){
let sum = 0;
for(const num of numbers){
  if(num % 2 !== 0){
    sum = sum + num;
  }
}
return sum;
}
const numbers = [5, 15, 8, 7];
const oddNumbers = odd(numbers);
// console.log(oddNumbers);

// ******************************************

function getSmaller(array){
if(array[0] < array[1]){
  return array[0];
}
else{
  return array[1];
}
}
const numbers2 = [70, 30, 78];
const getResult = getSmaller(numbers2);
// console.log(getResult); 

// ************************************************

function getAge(age){
if(age < 18){
  return 18;
}
else if(age > 45){
return 45;
}
else if(age > 18 && age < 45){
  return age;
}
}
const myAge = getAge(46);
// console.log(myAge);

// ***********************************************

function getDivide(array){
let sum = 0;
for(let num of array){
  if(num % 4 === 0){
    sum = sum + num;
  }
}
return sum;
}
const array = [2, 4, 5, 7, 8, 32, 45];
const getDivideNum = getDivide(array);
// console.log(getDivideNum);

// *****************************************

function multiplyOrDivide(number){
if(number < 20){
  return number * 2;
}
else{
  return number / 20;
}
}
const friendNum = multiplyOrDivide(3);
// console.log(friendNum);

// ***********************************************

function sumReturn(numbers){
  let sum = 0;
  for(let num of numbers){
   if(num < 0){
    sum = sum + num;
   }
  }
  return sum;
}
const array4 = [-1, 4, 6, -4, -1, -7];
const result = sumReturn(array4);
// console.log(result);

// ********************************************

function getMult(numbers){
  let multiply = 1;
for(let num of numbers){
  if(num % 3 === 0){
    multiply = multiply * num;
  }
}
return multiply;
}
const numbers7 = [3, 6, 5, 2];
const result6 = getMult(numbers7);
// console.log(result6);

