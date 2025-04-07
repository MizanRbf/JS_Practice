const player = {
  name: "Mizan",
  age: 26,
  sports: "cricket",
  team: "A"
}
console.log(player.team);

// **********************************

const laptop = {
  brand: "hp",
  price: 35000,
  hardDisc: "200tb",
  ram: "16 GB",
  screenSize: "23 inch"
}
console.log(laptop.screenSize);

// **********************************

const favPlace = {
  name: "Cox's Bazar",
  distance: "400 km",
  popularity: "high"
}
console.log(favPlace['popularity']);

// *****************************************

const phone = {
  brand: "realme",
  color: "black",
  price: "16000"
}
console.log(phone['price']);

// *******************************

const library = {
  name: "public library",
  location: "Dhaka",
  books: 5000
}
console.log(library.location);

// *******************************

const movie = {
  title: "Inception",
  director: "Nolan",
  rating: 9
}
console.log(movie['rating']);

// *************************************

const collage = {
  name: "ndc",
  established: 1949,
  group: [
    'science', 'Arts', 'Commerce'
  ]
}
console.log(collage.group[1]);

// ************************************

const family = {
  father: {
    name: "Fayser Ali",
    profession: "non-government employer",
    age: 50
  },
  mother: {
    name: "Nurzahan",
    age: 40,
    profession: "housewife"
  }
}
const sum = family.father.age + family.mother.age;
console.log(sum);

