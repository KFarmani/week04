// 1. create an array called ages containing values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [2, 8, 13, 17, 23, 28, 33, 45];

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.

let ageDifference = ages[ages.length - 1] - ages[0];
console.log("Age difference:", ageDifference);

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic.

ages.push (26);
ageDifference = ages[ages.lenght - 1] - age[0];
console.log("New age difference", ageDifference);

// 1c. Use a loop to iterate through the array and calculate the average age. 

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(sum / ages.length);

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLettersPerName = totalLetters / names.length;
console.log("Average letters per name:", averageLettersPerName);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, sparated by spaces. 

let allNames = '';
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + ' ';
}
console.log("All names:");

// 3. How do you access the last element of any array?

const lastElement = myArray[myArray.lenght - 1];
console.log(firstElement);

// 4. How do you access the first element of any array?

const firstElement = myArray[0];
console.log(firstELement);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for(let i = 0; i < nameLengths.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("name lengths:", nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log("sum of name lengths:");

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function conWord(word, n) {
    return word.repeat(n); 
}
let concatenated = conWord("Hi , 24");
console.log(concatenated); 

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName (firstName, lastName) {
    return(firstName + " " + lastName);
}
console.log(fullName);

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function number(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i];
    }
    return sum > 100;
}
let array = [8];
console.log(number(array));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
let numbersArray = [1, 2 ,3, 4, 5];
console.log(calculateAverage(numbersArray));

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareArrayAverages(arr1, arr2) {
    function calculateAverage(numbers) {
        if (numbers.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum = numbers[i];
        }
        return sum / numbers.length;
    }
    let averageArr1 = calculateAverage(arr1);
    let averageArr2 = calculateAverage(arr2);
    
    return averageArr1 > averageArr2;
}
let firstArray = [10, 20, 30];
let secondArray = [5, 15, 25];
console.log(compareArrayAverages(firstArray, secondArray));

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and return true if hot outside and moneyInPocket is greater than 10.50. 

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
let isHotOutside = true;
let moneyInPocket = 11.01;
console.log(willBuyDrink(isHotOutside, moneyInPocket));

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Function Description: This function decides whether to wear a hat based on weather conditions.
// The function returns true if it's sunny and false if it's cloudy.

function wearingHatOut(itIsSunny, itIsCloudy) {
    if (itIsSunny) {
        return true; // It's sunny, so wear a hat
    } else {
        return false; // It's not sunny, so don't wear a hat
    }
}
let sunnyDay = true;
let cloudyDay = false;
if (wearingHatOut(sunnyDay, cloudyDay)) {
    console.log("You should wear a hat today!");
} else {
    console.log("You don't need to wear a hat today.");
}
