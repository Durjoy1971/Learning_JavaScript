// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

// const book = new Map([
//   ["Bangla",80],
//   ["Math", 70],
//   ["English", 90]
// ]);

// console.log(book.get("Bangla"));
// book.set("Ict",90);
// console.log(book.size);

//store.get("t-shirt");
//store.set("hat", 40);
//store.delete("hat");
//console.log(store.has("underwear"));
//console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));