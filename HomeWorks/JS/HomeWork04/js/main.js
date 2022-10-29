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
var singularities = [' ','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var twos = [ ' ','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var tens = [ ' ','Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var a = +prompt("Enter the number with 2 digit: ")

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


