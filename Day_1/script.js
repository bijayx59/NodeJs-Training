console.log('Hello World')


//Variable in JS
let program = "Hello";
console.log(program)

//Constant in Js
const pi=3.14;
console.log(pi);


//function in js

function add(a,b) {
    return a + b;

}
console.log(add( 5,3));


//


const evenodd = (num)=>{
    if(num %2 == 0) {
        return console.log(`${num}is Even`)
    }else{
        return console.log(`${num}is Odd`);
    }
}

//Create
//A global variable x =5
//A function test()
//Inside it, create a local variable y =10
// print both x and y
// outside the function, print only x
// printing y should give 


let x = 5;
function test() {
    const y = 10;
    console.log(y)
    console.log(x)
}

//console.log(y) Error as it is a local variable/functional scope
console.log(x)


//task : Create a global variable score = 50
//create a function updated score();
//inside the function, creare alocal variable score = 100;
//print score inside the functio

// let score = 50;
// function updatedScore (){
//     let score = 100;
//     console.log(score)
// }
// console.log(score);
// updatedScore();
// updatedScore();
// console.log(score);


let points = 0;
function playGame(){
    let points = 50;
    points = points + 10;
    console.log(points);
}
console.log(points)
playGame()
playGame()
