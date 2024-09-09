// Part 1: Re-assign the fruit variable
let fruit = "Apple";
fruit = "Orange"; 
console.log("The fruit is", fruit); 

// Part 2: Math operations
// Task 1
console.log(25 + 3.5); 

// Task 2
console.log(new Date().getFullYear() - 1969); 

// Task 3
console.log(65 / 240); 

// Task 4
console.log(0.2708 * 100); 


// Part 3: String methods
// Task 1
console.log("John Doe".toUpperCase()); 

// Task 2
console.log("    Remove whitespace   ".trim()); 

// Task 3
console.log("How many characters long is this string?".length); 


// Part 4: Conditional statements
const carSpeed = 85;
if (carSpeed > 100) {
    console.log("Slow down!");
} else {
    console.log("Carry on");
}

// Task 1
const wordCount = 0;
if (wordCount === 0) {
    console.log("Get writing!");
}

// Task 2
const currentTemperature = 15;
const goneForARun = false;
if (currentTemperature > 10 && !goneForARun) {
    console.log("Go for a run!");
}

// Task 3
const name = "Mary";
if (name.length > 10) {
    console.log("You have a long name!");
} else if (name.length < 5) {
    console.log("You have a short name!");
} else {
    console.log("You have a medium length name!");
}


// Part 5: Functions
// Task 1
const printCurrentTime = () => {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString();
};
console.log(printCurrentTime());

// Task 2
const printName = () => {
    console.log("John Doe"); 
};
printName();
printName(); 

// Task 3
const printGreeting = (name) => {
    console.log(`Hello ${name}`);
};
printGreeting("Bob"); 
printGreeting("Sue"); 

// Task 4
const multiply = (a, b) => {
    return a * b;
};
const first = multiply(2, 2);
console.log(first); 
const second = multiply(100, 4);
console.log(second); 

// Task 5
const warmEnough = (temperature) => {
    return temperature > 10;
};
if (warmEnough(15)) {
    console.log("Go for a run!");
}
