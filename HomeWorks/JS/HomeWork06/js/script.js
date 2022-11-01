const arr = [123,45,76,89,3,76,23]

//1. Find the minimum element of this array

let min = Math.min(...arr);
console.log(min);

//2. Find the maximum element of this array

let max = Math.max(...arr);
console.log(max);

//3. Find the index of the minimum element of this array

let minIndex = arr.indexOf(min);
console.log(minIndex);

//4. Find the index of the maximum element of this array

let maxIndex = arr.indexOf(max);
console.log(maxIndex);

//5. Calculate the sum of array's elements with odd indices

let sumOddIndex = 0;

for (let i = 1; i < arr.length; i+=2){
    sumOddIndex+=arr[i];
}

console.log(sumOddIndex);

//6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array

let n = arr.length-1;

for(let i=0; i<=n/2; i++) {
  let temp = arr[i];
  arr[i] = arr[n-i];
  arr[n-i] = temp;
}
console.log(arr);

//7. Count the number of odd elements in the array

let numberofOddElements = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 1)
        numberofOddElements++;   
}

console.log(numberofOddElements);

//8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.

//9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.

//selection sort
// var len = arr.length;
// for (var i = 0; i < len - 1; i = i + 1) {
//     var j_min = i;
//     for (var j = i + 1; j < len; j = j + 1) {
//         if (arr[j] < arr[j_min]) {
//             j_min = j;
//         }
//     }
//     if (j_min !== i) {
//         var t = arr[i];
//         arr[i] = arr[j_min];
//         arr[j_min] = t;
//     }
// }

// console.log(arr);

//bubble sort
// sorted = false;

// while(!sorted) {
//   sorted = true;
//   for(var i=0; i < arr.length; i++) {
//     if(arr[i] < arr[i-1]) {
//       let temp = arr[i];
//       arr[i] = arr[i-1];
//       arr[i-1] = temp;
//       sorted = false;
//     }
//   }
// }

// console.log(arr);

// insertion sort

// function insertion_sort(arr) {
//     var len = arr.length;
//     var i = 1;
//     while (i < len) {
//         var x = arr[i];
//         var j = i - 1;
//         while (j >= 0 && arr[j] > x) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j+1] = x;
//         i = i + 1;
//     }
// }

// insertion_sort(arr);
// console.log(arr);
