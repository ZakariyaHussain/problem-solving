//const numbers = [1, 2, 3, 9, 33, 20];
// let maxNumber = Math.max(...numbers);
// console.log(maxNumber);


const allNumbers = [1, 2, 3, 9, 33, 20];
function findMaxNumber(numbers) {
  let maxNumber = numbers[0];
  for (let number of numbers) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

console.log(findMaxNumber(allNumbers));
