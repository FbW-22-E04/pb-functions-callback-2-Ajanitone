// #### Number Sqaure
// * Write a function which will return square of given number
// * Write a function which will return square of every number in array

const array = [1, 2, 3, 4, 5, 6];

const squareNumber = (num) => Math.pow(num, 2);

function square(array, cb) {
  let result = [];
  for (let num of array) {
    result.push(cb(num));
  }
  return result;
}
console.log(square(array, squareNumber)); // return [1,4,9,16,25]
