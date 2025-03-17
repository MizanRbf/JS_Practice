const purchase = 7000;
if(purchase > 3000){
const discount = purchase / 100 * 5;
const pay = purchase - discount;
console.log(pay);
}
else if(purchase > 6000){
  const discount = purchase / 100 * 15;
  const pay = purchase - discount;
  console.log(pay);
}
else{
  console.log(purchase);
}

// ******************************

const age = 50;
if(age < 12){
console.log('free');
}
else if(age > 60){
console.log('discount 50%');
}
else{
  console.log('full pay');
}

// *****************************

const bankBalance = 7000;
if(bankBalance < 1000){
  console.log('diposit kor');
}
else if(bankBalance < 5000){
  console.log('Bindas life');
}
else{
  console.log('donate more and more');
}

// **************************

const marks = 90;
if(marks < 50){
  console.log('Fail');
}
else if(marks <= 80){
  console.log('pass');
}
else{
  console.log('A+');
}

// ********************

const page = 100;
if(page < 100){
console.log('small book')
}
else if(page < 500){
console.log('mid size book')
}
else{
  console.log('heart attack size book')
}

// **************************

const temperature = 40;
if(temperature < 0){
  console.log('ice');
}
else if(temperature < 20){
  console.log('cool cool');
}
else{
  console.log('Hot Hot');
}

// **********************************

const level = 10;
if(level < 10){
console.log('novice');
}
else if(level < 50){
console.log('expert');
}
else{
  console.log('Pro Gamer');
}