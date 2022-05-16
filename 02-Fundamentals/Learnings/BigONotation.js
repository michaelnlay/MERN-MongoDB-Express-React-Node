// By now we've solved quite a few algorithms, but we may be wondering roughly how long it will take our function to run. One common way to represent this is called Big O Time complexity. Big O is not just a giant robot anime, it is a plot of the upper bound of how long a algorithm should take to run versus how big the problem is. These values are typically referred to in powers of "N" (size) with constants and lower power terms left out.

// Imagine if we are searching an array to find its smallest value.

function smallest(arr) {
  let min = arr[0];
  for (let element of arr) {
    if (element < min) {
      min = element;
    }
  }
  return min;
}
console.log(smallest([2, 5, 6, 12, 14, 28, 37, 1, 41, 44, 45]));

function smallest(sortedArr) {
  return sortedArr[0];
}
console.log(smallest([2, 5, 6, 12, 14, 28, 37, 1, 41, 44, 45]));
