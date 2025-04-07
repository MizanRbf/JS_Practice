function eatJuice(){
  console.log("take this juice of lemon")
}
// eatJuice();

// ***************************************

function myRoutine(){
  console.log("Perform Salatul Fazar");
  console.log("Reading the Holy Quran");
  console.log("eating breakfast");
  console.log("Doing Programming");
}
// myRoutine();

// ***************************************

function family(){
  console.log("Fayser Ali");
  console.log("Nurzahan");
  console.log("Mizan");
  console.log("Fatima");
  console.log("Afifa");
  console.log("Sadiya");
}
// family();

// **************************************

function taskDone(){
  console.log('Perform Salah');
  console.log("Doing Programming");
  console.log("Eating");
  console.log("Going Varsity");
  console.log("Reading Book");
}
// taskDone();

// ***************************************

function greetMe(){
  console.log("Good morning! have a great day");
}
// greetMe();

// ***************************************

function getFavFriends(){
console.log("Magfuz");
console.log("Shoyaib");
console.log("Alemin")
}
// getFavFriends();

// ***************************************

function introduceMySelf(){
   const myself = {
    name: "Mizan",
    age: 26,
    address: "Rajshahi",
    contact: "016....",
    height: "5 feet 4 inch",
    favFood: "Anarosh"
   }
   for(const key in myself){
    const values = myself[key];
    console.log(key,":", values);
   }
   
}
introduceMySelf();