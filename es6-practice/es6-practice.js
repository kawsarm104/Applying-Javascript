/*
1. let const
*/
let suzy = "Ami tomake ";
const kawsar = "valobashi"
console.log(suzy , kawsar)
/*
2. template string 
2.a: use variable
2.b: use object  property
*/
    const templateString = `this is a proposal to Suzy ${suzy}${kawsar} `
    console.log(templateString)
    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    console.log(`${person.age}`)
/*
3. arrow function
3.a. with one parameter. will return the number after dividing by 5
3.b. with two parameters. will add two to each number and then multiply the result.
3.c. three parameters. will multiply all three parameters
3.d. with two parameters but it will be a multi line arrow function. 
will add two to each number and then multiply the result.
make sure you return the result
*/
console.log("task 3")
const dividedByFive = (number) => number/5;
console.log(dividedByFive(52))
const sumOfTwoNumber = (number1, number2) => {
    const add = number1+number2;
    console.log(add)
    const multiply = number1*number2
    console.log(multiply)
}
sumOfTwoNumber(5,6)
const multiplingThreeNumbers = (number1, number2, number3) => number1*number2*number3
console.log(multiplingThreeNumbers(5,6,7))
const sumTwo = (a, b) => {
    return a*b;
}
console.log(sumTwo(5+2,4+2))
/*

4. [home work]: javascript function declaration vs arrow function
/*
/*
5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
*/
console.log("task 5")
let number = [5,4,7,8,7,9,4,1,];
console.log(number.map(num => num * 5))
const number2 = []
// const output = number2.push(number.map( num => num*5 ));
let output = number2.push(number.map( num => num*5 ))
console.log(output);
/*
6. [challenging] numbers of array. get odd numbers by using filter with arrow function
*/
const nums = [1,2,3,4,5];  output = nums.filter(n => n%2); console.log(output);

/*

7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.*/
const products = [
    { name: 'water bottle', price: 5000, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.find(product => product.price == 5000);
console.log(expensive)
/*

8. You have an object. Now use destructing to create a simple variable of any property of the object.
*/const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };


const { phone, price, dress, id } = fish;
console.log("task 8 ", price)

/*
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
*/
const array = [1, 2, 3, 4,5,6,8]
// [one, two, three ]  = array
// console.log(three)
/*10.[optional] just a write a function with three parameters.and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
*/