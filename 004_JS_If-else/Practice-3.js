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

const 