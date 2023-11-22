// variables 

const number_1 = 25;
const number_2 = 5;
const number_3 = 3;
const number_4 = 10;

const text_1 = "text 1";
const text_2 = "text 2";

const triangle_1   = { 
    base : 10,
    higth : 15

};
const triangle_2  = { 
    base : 25,
    higth : 15

};

// constants

const exercise_1 = "1.- Is the number 1 greater than the number 2?";

const exercise_2 = "2.- Is the number 1 less than number 2?";

const exercise_3 = "3.- Is the number 1 equal to number 2?";

const exercise_4 = "4.- Is text 1 equal to text 2?";

const exercise_5 = "5.- Are the objects equal?";

const exercise_6 = "6.- Logical AND:";

const exercise_7 = "7.- Logical OR:";

const exercise_8 = "8.- The sum of 10 + 3:";

const exercise_9 = "9.- The subtraction of 10 - 3:";

const exercise_10 = "10.- Multiplication of 10 * 3:";

const exercise_11 = "11.- Division of 10 / 3:";

const exercise_12 = "12.- 10 modulo 3: 1";

// Operations

console.log(`${exercise_1} ${number_1 > number_2}`);
console.log(`${exercise_2} ${number_1 < number_2}`);
console.log(`${exercise_3} ${number_1 == number_2}`);
console.log(`${exercise_4} ${text_1 === text_2}`);
console.log(`${exercise_5} ${triangle_1 === triangle_2}`);
console.log(`${exercise_6} ${text_1 === text_2 && number_1 > number_2}`);
console.log(`${exercise_7} ${text_1 === text_2 || number_1 > number_2}`);
console.log(`${exercise_8} ${number_3 + number_4}`);
console.log(`${exercise_9} ${number_4 - number_3}`);
console.log(`${exercise_10} ${number_4 * number_3}`);
console.log(`${exercise_11} ${number_4 / number_3}`);
console.log(`${exercise_12} ${number_4 % number_3}`);

