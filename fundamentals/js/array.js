let fruits = ["apple", "mango", "banana"];
console.log(fruits);
console.log(fruits[1]);

let newFruits = new Array("kiwi", "avacado", "dragon fruit"); //just another way
console.log(newFruits);

console.log(typeof fruits); //object
console.log(fruits.length);

fruits.push("cherry"); //adds in last of array
fruits.unshift("watermelon"); //adds in front of array
console.log(fruits);
