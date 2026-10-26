console.log("Hello World!");

//conditions:
let age =20;
let seatsLeft=5;
if(age>=18 && seatsLeft>0){
    console.log("You can Register");
}else{
    console.log("Registration unavailable");
}


//Switch Statement:
let day="Saturday"
switch(day){
    case "Saturday":
        console.log("Weekend");
break;
case "Sunday":
    console.log("weekend");
    break;
    default:
        console.log("Weekday");
}


//looping statement:
for (let i=1;i<=5;i++){
    console.log(i);
}


//Tasks 1:
console.log("Name: Selvanila S");
console.log("Course: B.Tech CSBS");
console.log(10);


//Task 2:
let eventName = "Music Concert";
let ticketPrice = 200;
let seatsleft = 50;
console.log(eventName);
console.log(ticketPrice);
console.log(seatsleft);


//Task 3:
let price = 200;
let total = price * 3;
console.log("Total Price:", total);


//Task 4:
if (total > 500) {
    console.log("Exceeds 500");
} else {
    console.log("Does not exceed 500");
}


//Task 5:
let num = -5;
if (num > 0) {
    console.log("Positive");
} else if (num == 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


//function:
function greet(){
console.log("Hello!");
}
greet();
greet();


// parameters:
function greet(name){
    console.log("Hello,"+name);

}
greet("Maya");
greet("Arun");


//Arrow functions:
const add=(a,b)=>{
    return a+b;
};
console.log(add(2,3));
const square =n=>n*n;
console.log(square(4));


//Practice Tasks:
// 1. Calculate total
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Total:", calculateTotal(100, 3));

// 2. Greeting function
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Selva");

// 3. Array length
let events = [
    "Workshop", "Seminar", "Hackathon",
    "Webinar", "Conference"
];
console.log("Event count:", events.length);

// 4. Filter numbers greater than 10
let numbers = [5, 12, 8, 20, 15, 3];
console.log("Filtered:", numbers.filter(num => num > 10));

// 5. Double numbers using map
let values = [1, 2, 3, 4, 5];
console.log("Doubled:", values.map(num => num * 2));

// 6. Sum using reduce
let prices = [20, 30, 40];
let sum = prices.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// 7. Original array demonstration
let original = [3, 1, 2];
let sorted = [...original].sort((a, b) => a - b);

console.log("Original:", original);
console.log("Sorted copy:", sorted);



//Task 1: Create a book object and update its price

let book = {
    title: "JavaScript Basics",
    author: "John",
    price: 500
};
console.log(book);
book.price = 600;
console.log("Updated Price:", book.price);



//Task 2: Create a nested user object and print the city

let user = {
    name: "Selvanila",
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};
console.log(user.address.city);


//Task 3: Create an array of three product objects and print each product name

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 1500 }
];
products.forEach(function(product) {
    console.log(product.name);
});



//Task 4: Use destructuring to extract two properties

let student = {
    name: "Selvanila",
    age: 20,
    department: "CSBS"
};
let { name, Age } = student;
console.log(name);
console.log(Age);



//Task 5: Use spread to copy an array and combine two arrays

let Numbers = [10, 20, 30];
let copy = [...Numbers];
let morenumbers = [40, 50];
let combined = [...Numbers, ...morenumbers];
console.log("Copied Array:", copy);
console.log("Combined Array:", combined);



//Task 6: Use rest parameters to add any number of values

function sumall(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumall(10, 20));
console.log(sumall(10, 20, 30));
console.log(sumall(10, 20, 30, 40));


//Task 7: Use optional chaining and ?? to provide a fallback

let user1 = {
    name: "Selvanila",
    address: {
        city: "Chennai"
    }
};
let user2 = {
    name: "Nikitha"
};
console.log(user1.address?.city ?? "City not available");
console.log(user2.address?.city ?? "City not available");



//Task1:
let campusName = "S.A. Engineering College"; 
function printCampusName() {
    console.log(campusName);
}
printCampusName();

//Task 2:
if (true) {
    let a = 10;
    var b = 20;
    console.log(a); 
    console.log(b); 
}
console.log(b);

//Task 3:Example var:
console.log(x); 
var x = 10;
console.log(x); 



/* Task 1: Click event */
document.getElementById("clickBtn")
    .addEventListener("click", function () {
        document.getElementById("status").textContent =
            "Button clicked successfully!";
    });

/* Task 2: Live character count */
document.getElementById("message")
    .addEventListener("input", function () {
        document.getElementById("count").textContent =
            this.value.length;
    });

/* Task 3 & 4: Registration form */
document.getElementById("registerForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const feedback = document.getElementById("feedback");

        if (name === "" || email === "") {
            feedback.textContent = "Error: Please fill in all fields.";
            feedback.style.color = "red";
        } else {
            feedback.textContent =
                "Registration successful! Welcome, " + name + ".";
            feedback.style.color = "green";
        }
    });

/* Challenge: One parent listener for all Join buttons */
document.getElementById("eventCards")
    .addEventListener("click", function (event) {
        if (event.target.classList.contains("joinBtn")) {
            const eventName = event.target.parentElement
                .querySelector("h3").textContent;

            document.getElementById("joinStatus").textContent =
                "You joined " + eventName + "!";
        }
    });


    //
    console.log("One");
    setTimeout(()=>console.log("Two"),0);
    console.log("Three");