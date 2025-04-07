function evenOrOdd(array){
  if(array.length % 2 ===0){
    return "even"
  }
  else{
    return "odd";
  }
}
const friends = ['Mahfuz', 'Alamin', 'Abdur Rahman', 'Sakhi','Hasem']
const array = evenOrOdd(friends);
// console.log(array);

// ************************************

function getFirstWord(str){
return str[0];
}
const firstWord = getFirstWord('mizan');
// console.log(firstWord);

// **********************************************

function calculator(num){
if(num > 10){
  const divide = num / 10;
  return divide;
}
else{
  const multiply = num * 10;
}
}
const result = calculator(40);
// console.log(result);

// ***************************************

function add(array){
const sum = array[0] + array[1];
return sum;
}
const number2 = [3,5,6,4,3];
const result2 = add(number2);
// console.log(result2);

// ******************************************

function numbers(n){
if(n % 2 == 0){
  return n * 2;
}
else{
  return n * 3;
}
}
const num4 = numbers(5);
// console.log(num4);

// ******************************************

function num(name1, name2){
if(name1.length > name2.length){
  return true;
}
else{
  return false;
}
}
const result5 = num('Mizan', 'Shoyaib');
// console.log(result5);

// *************************************************

function number(n1,n2){
  const multiply = n1 * n2;
if(multiply > 100){
  const half = multiply / 2;
  return half;
}
return multiply;
}
const result6 = number(10, 30);
// console.log(result6);

