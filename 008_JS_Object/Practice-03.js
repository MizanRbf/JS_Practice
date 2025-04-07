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
  console.log(keys,':', value);
}