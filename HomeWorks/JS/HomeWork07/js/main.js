
// 1. User gives 2 numbers (A and B). 
// Print to the console the result of dividing A by B and the remainder of the division.

var a = prompt("Enter the first number: ")
var b = prompt("Enter the second number: ")

function Devide(a,b){
    console.log(a%b+ " is reminder")
    console.log(a/b+ " is division")
}

Devide(a,b);
// 2. The user enters 2 values (A and B). Swap the contents of variables A and B 
// (that means the value of variable B must be assigned to variable A, and vice versa).

var a = prompt("Enter A: ")
var b = prompt("Enter B: ")

function Swap(a,b) {
    var temp = a
    a = b
    b = temp 

    console.log("A = "+ a)
    console.log("B = "+ b)
}

Swap(a,b);
// 3. The user enters 3 non-zero numbers (A, B and C). 
// Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.

var a = prompt("Enter the first number: ")
var b = prompt("Enter the second number: ")
var c = prompt("Enter the third number: ")

function LinearEquation(a,b,c) {
    console.log("x = " + ((c-b)/a))
}

// 4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, 
// if A=B then the result of A*B, if A<B then A-B.

var a = parseInt(prompt("Enter A: "))
var b = parseInt(prompt("Enter B: "))

function BigNum(a,b) {
    if(a > b){
        console.log(a+b);
    }
    else if(a==b){
        console.log(a*b);
    }
    else{
        console.log(a-b);
    }
}

BigNum(a,b);

// 5.User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.

let root1, root2;

// take input from the user
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");

function QuadraticEquation(a,b,c) {
    // calculate discriminant
    var discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        console.log(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    );
    }
}

QuadraticEquation(a,b,c);

//6. The user enters a two-digit number. 
var singularities = [' ','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var twos = [ ' ','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var tens = [ ' ','Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var a = +prompt("Enter the number with 2 digit: ")

function ChangeToString(a) {
    let numLen = a.toString().length
    if (numLen>2){
        console.log("Please enter two-digit number !")
    }
    else if (numLen==2 && a%10!=0 && a>=20){
        let first =  Math.floor(a/10);
        let second = a%10
        console.log(tens[first]+" "+singularities[second])
    }
    else if (a>10 && a<20){
    let x = a%10
    console.log(twos[x])
    }
    else if (a%10==0){
        let x =a/10
        console.log(tens[x])
    }
    else {
        console.log(singularities[a])
    }
}

ChangeToString(a);

// ---------------------------------------------------------------


//1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.

// let a = +prompt("Enter the number: ")

function OneToThousand(a) {
    for(let i = 1; i < 1001;i++){
        if(i % a == 0){
            console.log(i);
        }
    }
}

// OneToThousand(a);

//2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).

// let num = +prompt("Enter the number: ")

function PositiveInt(num) {
    let count = 0;
    for(let i = 1; i*i<num;i++){
        count++;
    }
    console.log(count);

    OR

    count = 0;
    for(let i = 1; i<num;i++){
        if(i*i<num){
            count++;
        }
    }
    console.log(count);
}

// PositiveInt(num);

//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.

// let a1 = +prompt("Enter the number: ")

function LargestDivisior(a1) {
    let largestNum = 0;
    for(let i = 1; i < a1;i++){
        if(a1 % i == 0){
            largestNum = i;
        }
    }

    console.log(largestNum);
}

// LargestDivisior(a1);

//4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).

// let num1 = 0;
// let num2 = 0;
// let sum = 0;

// do {
//     num1 = +prompt("Enter the first number: ")
//     num2 = +prompt("Enter the second number: ")
// } while (num2 < num1);

function SumOfDevisibleBySeven(num1,num2) {
        
    for (let i = num1; i <= num2; i++)  {
        if(i % 7 == 0){
            sum+=i;
        }
    }

    console.log(sum);
}

// SumOfDevisibleBySeven(num1,num2);

//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.


// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Number:');

function FibonacciSeries(number) {
    for (let i = 1; i <= number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    console.log(n1);
}

// FibonacciSeries(number);

//6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).

// let num3 = +prompt("Enter the number one: ")
// let num4 = +prompt("Enter the number two: ")

// var gcd;
  
function GCD(num3,num4) {
    while ((num3 % num4) > 0) {
        gcd = num3 % num4;
        num3 = num4;
        num4 = gcd;
    } 

    console.log(`GCD is: ${num4}`);
}

// GCD(num3,num4);


//7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.

// let e = +prompt("Enter the number: ")

function Mirror(e) {
    let rev_num = 0;
    while(e > 0)
    {
        rev_num = rev_num * 10 + e % 10;
        e = Math.floor(e / 10);
    }

    console.log(rev_num);
}

// Mirror(e);


//8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".

var a = +prompt("Enter the first number: ")
var b = +prompt("Enter the second number: ")

function PairOfNums(a,b) {
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
}

// PairOfNums(a,b);

// ---------------------------------------------------------------

// to write "deepEqual" function to compare 2 objects
const car = {
    brand:'Tesla',
    model:'Model X',
    price:50000
}

const car1 = {
    brand:'BMW',
    model:'F30',
    price:50000
}

const car2 = {
    brand:'BMW',
    model:'F30',
    price:50000
}

var deepEqual = function (x, y) {
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        return false;
  
      for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }
      
      return true;
    }
    else 
      return false;
}


console.log(deepEqual(car,car1));
console.log(deepEqual(car1,car2));