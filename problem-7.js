let nums = [1, 2, 3, 4, 5, 6];

function findEvenNumbers(arr) {
  let evenNumbers = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

console.log(findEvenNumbers(nums));

