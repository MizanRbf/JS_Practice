const book = {
  name: "The sprit of Islam",
  author: "Mizan",
  price: 500
}
// console.log(Object.keys(book), Object.values(book));

// **********************************************************

const article = {
  title: "Learning JS",
  category: "Programming"
};

const articleKeys = Object.keys(article);
const hasAuthor = articleKeys.includes('author');
// console.log(hasAuthor);

// *********************************************************

const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 450000
};
for(const keys in laptop){
  const value = laptop[keys];
  // console.log(keys,':', value);
}

// ************************************

const phone = {
  brand: "Samsung",
  model: "Galaxy M21",
  price: 85000
}
const keys = Object.keys(phone);
for(const key of keys){
  const values = phone[key]; 
  // console.log(key, ":", values);
}

// ***********************************

const bike = {
  brand: "hero",
  price: 120000,
  model: "splendor"
}
const value = Object.values(bike);
// console.log(value);

// *******************************************

const books = {
  book1: "harry potter",
  book2: "the hobbit",
  book3: "the gamer"
}

for(const book in books){
  const bookNames = books[book];
  // console.log(bookNames);
}

// ************************************

const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
};
let sum = 0;
for(let number in numbers){
sum = sum + numbers[number];
}
// console.log(sum);

// ****************************************

const player = {
  name: "Messi",
  team: "Argentina",
  goals: 91
};
const values = Object.values(player);
// console.log(values);

// *******************************************

const building = {
  floors: 10,
  address: {
    street:"Main road",
    city: "Dahka",
  },
  type: "Commercial"
}

for(const keys in building){
  const values = building[keys];
  console.log(keys, ":", values);
}