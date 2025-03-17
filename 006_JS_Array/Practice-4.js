const fruits = ["mango", "banana", "apple", "lichu"];
if(fruits.includes("mango")){
  console.log("mango ace");
}
else{
  console.log("there is no mango here");
}

// ******************************

const person = ["babul", "alif", "choton"];
const friend = person.indexOf('babul');
console.log(friend);

// **************************

const friends2 = ["rimon", "rifat", "rajib"];
const newFriend2 = friends2.indexOf("rifat");
console.log(newFriend2);

// *****************************

const country2 = ["Dhaka", "Chittagong", "Sylhet"];
country2.push("rajshahi");
if(country2.includes('RajShahi')){
  console.log(true)
}
else{
  console.log(false)
}

// ************************************

const isRainy = true;
if(isRainy == true){
  console.log("I need umbrella")
}
else{
console.log("I don't need");
}

// ************************************

const games2 = ["Football", "cricket", "volyball"];
if(games2.includes("BatMinton")){
  console.log(true)
}
else{
  console.log(false);
}
