const person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["Reading", "Music", "Movies"],
};

console.log(person.name);
console.log(person.hobbies[1]);

const remote = {
  color: "black",
  brand: "Sony",
  dimensions: {
    length: 20,
    width: 10,
    height: 5,
  },
  turnOff: function () {
    console.log("The TV is turned off");
  },
};

console.log(remote.brand);

let p1 = {
  name: "John",
};

let p2 = p1;
p2.name = "Aryan";

console.log(p1);

//stack memory and heap memory

// we have two types of memory in javascript stack memory and heap memory
// heap memory is used to store the objects and stack memory is used to store the variables and functions
// stack memory stores variable that store the address of the object in the heap memory

// now to copy p1

let p3 = {
  ...p1, //spread operator // but this makes an issue if we have another objects in the first one // thus this is Shallow copy
};

const p1string = JSON.stringify(p1); //makes the object a string
//Deep copy
const p4 = JSON.parse(p1string); //makes the string an object
console.log(p4);
