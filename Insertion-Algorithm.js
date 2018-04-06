// Instructions

// Using the pseudo-code below and what you can research online, implement Insertion sort in JavaScript.

// - start at the beginning of the array
// - move into a loop
// - compare only 2 values
// - swap if left is more than right
// - repeat until this current value is less than the right value OR the value is at the far right of the array

// - pseudo code:

// for i ← 1 to length(A) - 1

//    j ← i

//    while j > 0 and A[j-1] > A[j]

//        swap A[j] and A[j-1]

//        j ← j - 1

//    end while

// end for
// * Then, test your algorithm with each of the commented out arrays of data. As a bonus, use Benchmark.js to time it in both cases.

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]