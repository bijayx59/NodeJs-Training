// example

// 


//Guess the output 
// let num = 1;
// setTimeout(()=>{
//     num = 5;

// },10);

// setTimeout(()=>{
//     console.log("A:", num);
// },0);
// console.log("B:",num);

console.log('step-1');
setTimeout(() =>{
    console.log('Step-2');
},0);

setTimeout(() => {
    console.log('Step-3');
},500);

setTimeout(()=>{
    console.log('Step-4');
},300);
    

