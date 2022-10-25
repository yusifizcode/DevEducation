// 1. User gives 2 numbers (A and B). 
// Print to the console the result of dividing A by B and the remainder of the division.

var a = prompt("Enter the first number: ")
var b = prompt("Enter the second number: ")
console.log(a%b+ " is reminder")
console.log(a/b+ " is division")

// 2. The user enters 2 values (A and B). Swap the contents of variables A and B 
// (that means the value of variable B must be assigned to variable A, and vice versa).

var a = prompt("Enter A: ")
var b = prompt("Enter B: ")


var temp = a
a = b
b = temp 

console.log("A = "+ a)
console.log("B = "+ b)

// 3. The user enters 3 non-zero numbers (A, B and C). 
// Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.

var a = prompt("Enter the first number: ")
var b = prompt("Enter the second number: ")
var c = prompt("Enter the third number: ")

console.log("x = " + ((c-b)/a))

// 4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, 
// if A=B then the result of A*B, if A<B then A-B.

var a = parseInt(prompt("Enter A: "))
var b = parseInt(prompt("Enter B: "))

if(a > b){
    console.log(a+b);
}
else if(a==b){
    console.log(a*b);
}
else{
    console.log(a-b);
}

// 5.User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.

let root1, root2;

// take input from the user
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");

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

//6. The user enters a two-digit number. 
//Print the literal representation of this number to the console. 
//For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".

// var once = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
// var twos = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
// var tens = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

// let numLen = a.toString().length
// console.log(numLen)
// if (numLen>2){
//     console.log("Please enter two-digit number !")
// }
// else if (numLen==2){
//     let first =  Math.floor(a/10);
//     let second = a%10
//     console.log(tens)
// }

const num = prompt("Eded daxil edin: ")

if(num % 10 == 0 && num - (num % 10) == 10){
    console.log("ten");
}
else if(num % 10 == 1 && num - (num % 10) == 10){
    console.log("eleven");
}
else if(num % 10 == 2 && num - (num % 10) == 10){
    console.log("twenty");
}
else if(num % 10 == 3 && num - (num % 10) == 10){
    console.log("thirteen");
}
else if(num % 10 == 4 && num - (num % 10) == 10){
    console.log("thirteen");
}