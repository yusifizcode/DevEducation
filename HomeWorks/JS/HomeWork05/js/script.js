//1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.

// let a = +prompt("Enter the number: ")

// for(let i = 1; i < 1001;i++){
//     if(i % a == 0){
//         console.log(i);
//     }
// }


//2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).

// let num = +prompt("Enter the number: ")
// let count = 0;
// for(let i = 1; i*i<num;i++){
//     count++;
// }
// console.log(count);

// OR

// count = 0;
// for(let i = 1; i<num;i++){
//     if(i*i<num){
//         count++;
//     }
// }
// console.log(count);


//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.

// let a1 = +prompt("Enter the number: ")
// let largestNum = 0;
// for(let i = 1; i < a1;i++){
//     if(a1 % i == 0){
//         largestNum = i;
//     }
// }

// console.log(largestNum);

//4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).

// let num1 = 0;
// let num2 = 0;
// let sum = 0;

// do {
//     num1 = +prompt("Enter the first number: ")
//     num2 = +prompt("Enter the second number: ")
// } while (num2 < num1);

// for (let i = num1; i <= num2; i++)  {
//     if(i % 7 == 0){
//         sum+=i;
//     }
// }

// console.log(sum);


//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.


// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Number:');

// for (let i = 1; i <= number; i++) {
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// console.log(n1);


//6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).

// let num3 = +prompt("Enter the number one: ")
// let num4 = +prompt("Enter the number two: ")

// var gcd;
  
// while ((num3 % num4) > 0) {
//     gcd = num3 % num4;
//     num3 = num4;
//     num4 = gcd;
// } 

// console.log(`GCD is: ${num4}`);


//7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.

// let e = +prompt("Enter the number: ")
// let rev_num = 0;
// while(e > 0)
// {
//     rev_num = rev_num * 10 + e % 10;
//     e = Math.floor(e / 10);
// }

// console.log(rev_num);


//8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".

var a = +prompt("Enter the first number: ")
var b = +prompt("Enter the second number: ")
let rem;
let rem2;

while(a>0){
    
    rem = a % 10;
    a = (a-rem) / 10;

    while(b>0){
        rem2 = b % 10;
        b = (b-rem2) / 10;

        if(rem2 == rem){
            console.log("YES");
            break;
        }
    } 
}

if(rem2 != rem){
    console.log("NO");
}