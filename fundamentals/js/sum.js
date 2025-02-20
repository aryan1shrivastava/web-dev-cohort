let myArray = [1, 4, 5, 6, 7, 8, 2, 3];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray(myArray));
