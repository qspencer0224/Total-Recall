/*
  1. how do we assign a value to a variable?
  ANSWER: different data types require different methods. For example, a string might require quotations but a boolean
  might need an equal sign and a truthy or a falsy expression, etc etc.

  2. how do we change the value of a variable?
  ANSWER: With a function and dom manipulation

  3. how do we assign an existing variable to a new variable? ANSWER: use the keyword "let"

  4. remind me, what are "declare", "assign", and "define"? ANSWER: "declare" creats a variable, "assign" is used to
  answer a value to a variable, and "define" gives the value a meaning

  5. what is pseudocoding and why should you use it? ANSWER: pseudocoding is wireframing the project which is useful and
  essential because it organizes the code

  6. what percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in
  code to solve it? ANSWER: you should spend 90% of the time thinking about what you're going to do then 10% to execute
  /* */

// B. Strings

let firstVariable = "Hello World";

let firstVariable = 4;

let secondVariable = "Hello World";

let secondVariable = "Hector Zeroni";

/*What is the value of firstVariable?
  ANSWER: 4 */

let yourName = "Quenton";

let intro = "Hello, my name is "

let greeting = (intro + yourName);

//C. Booleans

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a || b);
  console.log(c || d);
  console.log('Name' && 'Name');
console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false && false)
  console.log(e && 'Kevin');
  console.log(a || b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a && a || d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 && '48');

//D. The Farm

let animal = "cow";

const changeAnimal = () =>{
    if(animal === "cow")
    return("mooooo");
    else{
        console.log("Hey! You're not a cow.");
    };
};

// E. Driver's Ed

let person = {
    age: 16
}

const driversed = () =>{
    if(age >= 16)
    return ("Here are the keys!")
    else{
        return ("Sorry, you're too young")
    }
}

// II. Loops

//1.
for(let i = 0; i < 10; i++);
//2.
for(let i = 10; i <= 400; i++);
//3.
for(let i = 12; i < 4000; i+3);

//B. Get even
for(let i = 1; i < 100; i++);
if(i %2 === 0);
return("<-- is an even number");

//C. Give me Five

//D. Savings Account
let bank_account = for(i = 1; i < 10; i++);

//III. Arrays & Control flow
/*
1. What are the things in an array called?
ANSWER: index
2. Do Arrays guarantee those things will be in order? 
ANSWER: yes because its chonological order
3. What real-life thing could you model with an array?
ANSWER: The alphabet
*/

//B. Easy Does It
let quotes = [
    "Woody", "Buzz", "Wendy"
];

//C. Accessing elements
const randomThings = [1, 10, "Hello", true]

randomThings[0];

//D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

ourClass[2];

//E. Mix it up
const myArray = [5, 10, 500, 20];

myArray.push("Aegon");
myArray.pop("5");

//F. Biggie Smalls
let number = 14;

if(number < 100)
console.log("little number")
else{
    "big number"
};

//G. Monkey in the Middle
const check = () =>{
  for(let i = 0; i < 10; i++);
  if(i < 10){
    console.log("little number")
  }
  else if(i > 10){
    console.log("big number")
  }
  else{
    console.log("monkey")
  }
};

//H. What's in Your Closet?

//1.
{`Kristyn is rocking that ${kristynsCloset([2])} today!`}

//2. 
kristynsCloset.push('raybans', [6])

//3.
kristynsCloset.replace([5], 'stained knit hat')

//IV. Functions

//A. printGreeting

const printGreeting = (name) =>{
  let name = "Quenton"
  console.log(`Hello, there, ${name}!`)
}

//B. printCool

const printCool = (name) =>{
  name = "Captain Reynolds"
  console.log(`${name} is cool`)
}

//C. calculateCube

const calculateCube = (volume) =>{
  let length = 5;
  let width = 8;
  let height = 6;
  let volume = (length * width * height)
  console.log(volume)
}

//D. isVowel

//E. getTwoLengths

const getTwoLengths = (name, animal ) =>{
  let name = "Hank" 
  let animal = "Hippopopalous"
  let animalLength = animal.length
  let namelength = name.length
  console.log(namelength, animalLength);
}

//F. getMultipleLengths

//G. maxofThree

const maxofThree = (num1, num2, num3) =>{
  num1 = 12
  num2 = 5
  num3 = 8
}

//H. printLongestWord

const printLongestWord = () => {
  let words = ["abracadabra", "browserrouter", "holysmokesbatman"]
  Math.max(words.length([]))
}

//OBJECTS

//A. Make a user object

//B. Update the user

let user = {
  name: "Buzz Lightyear",
  email: "2nfinityandbeyond@gmail.com",
  age: 2, 
  purchased: "[]"
}

const changeAge = () =>{
  age++
}

//C. Addings keys and values

//D. Shopaholic!

//1.
user.purchased.push('carboyhydrates')

//2.
user.purchased.push('peace of mind')

//3.
user.purchased.push('Merino jodhpurs')

//4.
console.log(user.purchased('Merino jodhpurs'))

//E. Object-within-object

//1.
let user.friend = {
  name: "John",
  age: 27,
  location: "Chicago",
  purchased: ["The One Ring", "A latte"]
}

//2.
console.log(user.friend.name)

//3.
console.log(user.friend.location)

//4.

//F. Loops

//G. Functions can operate on objects

//1. 
const upTheAge = () =>{
  age++
  age.toUpperCase()
}
