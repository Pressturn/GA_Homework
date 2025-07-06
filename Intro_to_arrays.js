/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  
console.log('Exercise 1 result:', foods);

foods.push ('pizza', 'cheeseburger');
console.log('Exercise 2 result:', foods);

foods.unshift('taco');
console.log('Exercise 3 result:', foods);

const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);

foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);

const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);

const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);

const allFoods = foods.join(" --> ")
console.log('Exercise 9 result:', allFoods);

const hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup);





/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
for (const odds of nums) {
    if (odds % 2 !== 0) {
    console.log('Exercise 11 result:', odds);
 }
}

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const fizz = [];
for (const div3 of nums) {
    if (div3 % 3 === 0) {
    fizz.push(div3);
 }   
}

const buzz = [];
for (const div5 of nums){
    if(div5 % 5 === 0) {
    buzz.push(div5);
}
}

const fizzbuzz = [];
for (const div3n5 of nums){
    if(div3n5 % 5 === 0 && div3n5 % 3 === 0 ); {
    fizzbuzz.push(div3n5);
}
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays.at(-1);

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = [];
for (const subArrays of numArrays) {
for (const num66 of subArrays)
    if (num66 === 66) {
    num.push(num66);
    }
}
console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0;

for (const subArrays of numArrays){
for (const totalNum of subArrays) {
    total = total + totalNum;
}
}

console.log('Exercise 15 result:\n', total);
