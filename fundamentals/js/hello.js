function printChai() {
  console.log("Hello Chai");
}

function bringbrush(numberOfBrush) {
  console.log(`bring me ${numberOfBrush} brush`);
}

function addTwo(num1, num2) {
  return num1 + num2;
}

printChai();

bringbrush(4);
addTwo(1, 2);
console.log(addTwo(4, 3));

bringbrush(addTwo(3, 5));
