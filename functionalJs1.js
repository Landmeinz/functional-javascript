
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

function sum(numbers) {
    if (numbers.length === 1) {
        return numbers[0];
    } else {
        return numbers[0] + sum(numbers.slice(1))
    }
}
console.log(sum([0, 1, 2, 3, 4])); // 10


function iterativeFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let previous = 0;
    let current = 1;
    for (let i=n; i>i; i--) {
        let next = previous + current;
        previous = current; 
        current = next;
    }
    console.log('--- this is current', current)
    return current; 
}
console.log(iterativeFibonacci(6));
