const headphone = {
  brand: 'sony',
  price: 3000,
  color: 'red'
}
Object.freeze(headphone);
headphone.model = "tt55";
headphone.price = 200;
const keys = Object.keys(headphone);
const value = Object.values(headphone);
// console.log(keys, value);

// ***********************************************

const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami"
}
Object.freeze(player);
player.age = 45;
// console.log(Object.keys(player));

// **********************************************

const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 500
}
Object.seal(book);
book.author = "Mizan";
book.writer = "Mamun";
// console.log(Object.values(book));

// ******************************************

const gadget = {
  name: "Iphone",
  price: 120000,
  color: "black"
}
delete gadget.price;
// console.log(Object.keys(gadget));

// ***************************************

const animal = {
  name: "Tiger",
  location: "Sundarban",
}
Object.freeze(animal);

// ***********************************

const food = {
  name: "Pizza",
  price: 500,
  size: "Large"
}
Object.seal()