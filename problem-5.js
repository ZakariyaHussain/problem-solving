
let numbers = [1, 2, 2, 3, 4, 4];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(numbers));