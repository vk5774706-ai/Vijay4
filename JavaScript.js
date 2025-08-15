let name = "Alice";
const age = 25;
let isStudent = true;
let hobbies = ["reading", "coding"];
let user = { name, age, isStudent };
console.log("User:", user);


function greet(person) {
  return `Hello, ${person}!`;
}
console.log(greet(name));

const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 0; i < hobbies.length; i++) {
  console.log("Hobby:", hobbies[i]);
}

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);


class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog("Buddy");
dog.speak();

function counterMaker() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = counterMaker();
console.log("Counter:", counter());
console.log("Counter:", counter());


function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function loadData() {
  let data = await fetchData();
  console.log(data);
}
loadData();


try {
  throw new Error("Oops!");
} catch (e) {
  console.error("Caught error:", e.message);
}


let [a, b] = [10, 20];
let person = { name: "Eve", age: 22 };
let { name: personName } = person;
console.log("Destructured name:", personName);

let extendedUser = { ...person, city: "Delhi" };
console.log("Extended user:", extendedUser);


let jsonString = JSON.stringify(extendedUser);
let parsedUser = JSON.parse(jsonString);
console.log("Parsed JSON:", parsedUser);


let regex = /\d+/;
console.log("Regex test:", regex.test("abc123"));


let now = new Date();
console.log("Current time:", now.toLocaleString());

const Singleton = (function () {
  let instance;
  function createInstance() {
    return { id: Math.random() };
  }
  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
console.log("Singleton:", Singleton.getInstance());
