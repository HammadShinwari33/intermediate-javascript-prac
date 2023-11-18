
// ================== event() ===================

// function triggerSomething(){
//     // console.dir(event);
// }

// function triggerSomething(b){
//      console.dir(event.target.text);
// }

// ================== forEach() ===================

// let myArray = ["hammad","waqas","jawad","haseeb"];
// function checkItem(item, ind){
//     console.log(item , ind);
// }
// myArray.forEach(checkItem);


// ==================== imediately invoked function (iif) =======================

// (function (){
//     console.log("Hello")
// }());


// let a = function(){
//     console.log("Hello");
// }
// a();


// ========================================== Chapter 12 ===============================================

// ========================================== Intermediate javascript ==========================================


// ========================== regular expression (regex) ==============================


// ------------------- match() -------------------------


// let text = "I love JavaScript!";
// console.log(text.match(/javascript/));  

// console.log(text.match(/javascript/i));


// -------- group ke liye array banana zaroori h --------

// let text = "d";
// console.log(text.match(/[a-d]/));


// let text = "t";
// console.log(text.match(/[a-zA-Z]/));


// let text = "9";
// console.log(text.match(/[a-zA-Z0-9]/));


// ----------- ye hme null dega ------------

// let text = "Z";
// console.log(text.match(/[a-z0-9]/));


// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));


// ---------- iss se hum lafz ko alag karte h ------------

// let text = "Just some text.";
// console.log(text.match(/./g));


// let text = "Just some text.";
// console.log(text.match(/\./g));


// ===================================== Searching and replacing strings =================================


// let text = "That's not the case.";
// console.log(text.search(/Case/i));


// let text = "Coding is fun. Coding opens up a lot of opportunities";
// console.log(text.replace("Coding", "JavaScript"));


// let text = "Coding is fun. Coding opens up a lot of opportunities";
// console.log(text.replace(/Coding/g, "JavaScript"));




// =================================== JavaScript hoisting ===================================


// ====================== ye sirf var ke saath hota h ================

// var x;
// x = 5;
// console.log(x);

// x = 5;
// console.log(x);
// var x;


// =================================== Using strict mode ===================================


// --------------------- it is not strict method ---------------

// function sayHi() {
//     greeting = "Hello!";
//     console.log(greeting);
//    }
//    sayHi();

// --------------------- it is strict method ---------------

// iss ko upper hi lagana zaroori h neeche kaam ni kate ga

// "use strict"
// function sayHi() {
//     greeting = "Hello!";
//     console.log(greeting);
//    }
//    sayHi();

// ========================================== Debugging ============================================

// --------------------------- Breakpoints -------------------------------

let val = 5;
val += adder();
val += adder();
val += adder();
console.log(val);
function adder(){
 let counter = val;
 for(let i=0; i<val; i++){
 counter++;
 }
return counter ;
}