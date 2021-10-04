const obj = {
  name: "Vanessa",
  age: 24,
  gender: "female",
};

const enties = [
  ["name", "Vanessa"],
  ["age", 24],
  ["gender", "female"],
];

console.log(Object.entries(obj));
console.log(Object.fromEntries(enties));

const map = new Map(enties);

console.log(map);
