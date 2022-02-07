
// frontend masters // functional programing via javascript notes

// Mary Rose Cook Recurse Center recurse.com

// WHAT IS FUNCTIONAL PROGRAMMING? // 
// A coding style supported by some languages
// a programming paradigm; a world view of how things are controlled
// units interacting with each other in a program
// dont change anything about the 'outside world' 

// ONE BASIC IDEA //
// ** pure functions 
// only input in, only output out
// a pure function is a black box; something comes in, it's altered, and exits;
// 'side effects' is anything outside of that program that needs to be called
// the only info needed is the input params 

// --- EXAMPLE --- // 

// let name = "alonzo"
// function greet() {
//     console.log(`hello, ${name}`);
// };
// greet(); 

// vs 

// function greet(name) {
//     return `hello, ${name}`
// }
// console.log(greet('alonzo'));



// --- recursion --- // 
// a call to itself

// function sum(numbers) {
//     if (numbers.length === 1) {
//         return numbers[0];
//     } else {
//         return numbers[0] + sum(numbers.slice(1))
//     }
// }
// console.log(sum([0, 1, 2, 3, 4])); // 10



// // this is iterative
// function iterativeFibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     let previous = 0;
//     let current = 1;
//     for (let i = n; i > 1; i--) {
//         let next = previous + current;
//         previous = current;
//         current = next;
//     }
//     return current;
// }
// console.log('--- IF', iterativeFibonacci(10));

// // this is recursive
// function recursiveFibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
// }
// console.log('--- RF', recursiveFibonacci(8));


// --- HIGHER ORDER FUNCTIONS --- //
// can be passed around as values like callbacks 
// functions that take in other functions

// dont loop!
// use higher order functions like .map .reduce .filter
// they all take in an array and returns a new array
// .filter().map().reduce()
// .reduce takes in an array and returns a single value the others return new arrays

let wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]

// .filter // 

function isEven() {
    return wholes.filter(n => (n % 2 === 0));
}

function isOdd() {
    return wholes.filter(n => (n % 2 != 0));
}

console.log('-- even list:', isEven());
console.log('--- odd list:', isOdd());


function greaterThanFour() {
    return wholes.filter(n => (n > 4))
}
console.log('--- greater than 4 list:', greaterThanFour());

function primeList() {
    const isPrime = num => {
        if (num > 0) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return num !== 1;
        }
    };
    return wholes.filter(isPrime)
}
console.log('--- prime list:', primeList()); // 2, 3, 5, 7


// .map //
console.log(wholes);

function doubled() {
    return wholes.map(n => n * 2)
}
console.log('--- doubled list:', doubled());

function halved() {
    return wholes.map(n => n / 2)
}
console.log('--- halved list:', halved());


function fizzBuzz() {

    return wholes.map(n => {

        switch (true) {
            case n % 15 === 0:
                return 'fizzbuzz'

            case n % 5 === 0:
                return 'buzz'

            case n % 3 === 0:
                return 'fizz'
            
            default:
                return n
        }
    })

    console.log(fizz);
    return fizz
}
console.log('--- fizzBuzz list:', fizzBuzz()); // fizzBuzz === should be [fizzbuzz,1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,fizzbuzz]

// .reduce // 

// Arrow function
// reduce((previousValue, currentValue) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array

// Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Inline callback function
// reduce(function(previousValue, currentValue, currentIndex, array) 


function reducer(previous, current, index, wholes) {
  const sum = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, sum: ${sum}`);
  return sum;
}
console.log('--- sum', wholes.reduce(reducer));


let sum2 = wholes.reduce((partialSum, a) => {
    return partialSum + a
})
console.log('--- sum2', sum2);
// console.log('--- sum', wholes.reduce(reducer));

function indexMe(index){
    console.log('index', index);
    return index
}

wholes = [6, 3, 2, 8, 4, 1, 5, 7, 8, 9, 10, 15]

console.log(wholes.map((n, index) => ({index, 'result': (n*1.25)}) ));

