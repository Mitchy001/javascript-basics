// Declaring variables with different data types
let firstName = "Michel";
let lastName = "Mayenga";
let country = "Kenya";
let city = "Nairobi";
let age = 25;
let isMarried = false;
let year = 2024;

// Checking data types
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Checking if type of '10' is equal to 10
console.log(typeof '10' === typeof 10);

// Checking if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

// Truthy values
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));

// Falsy values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

// Logical expressions
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

// Prompt user for base and height to calculate area of a triangle
let base = 20;
let height = 10;
let area = 0.5 * base * height;
console.log(`The area of the triangle is: ${area}`);

// Check if user is old enough to drive
let birthYear = 2005;
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}

// String manipulations
let challenge = "30 Days Of JavaScript";
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice(3));
console.log(challenge.slice(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"));
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(Math.floor(Math.random() * 101));

// Comparing a and b
let a = 10, b = 5;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

console.log(a > b ? "a is greater than b" : "a is less than b");

// Grading system
let score = 85;
if (score >= 80 && score <= 100) {
    console.log("A");
} else if (score >= 70 && score <= 89) {
    console.log("B");
} else if (score >= 60 && score <= 69) {
    console.log("C");
} else if (score >= 50 && score <= 59) {
    console.log("D");
} else {
    console.log("F");
}
