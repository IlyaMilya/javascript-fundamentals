
/*
Functions 

Functions allow us to bundle together a lot of functionality and 
then easily call it all at once by name (the function name)

Functions allow to specificy exactly when we want to call 
all of this functionality

*/

//const quiz = () => {
    //let myName = prompt('Enter your name')
    //let month = prompt('What month were you born?')
    //let food = prompt('What is your favorite food?')
    //console.log('My name is', myName)
    //console.log('I was born in', month)
    //console.log('My favorite food is', food)
//}



const quiz = () => {
    let myName = prompt('Enter your name')
    let month = prompt('What month were you born?')
    let food = prompt('What is your favorite food?')
    console.log('My name is', myName)
    console.log('I was born in', month)
    console.log('My favorite food is', food)
}

 const notifyA = () => {
 console.log('This is', this)
 }

 const objectA = {
     name: function() {
         console.log
     }
 }

 const objectB = {
     name: () => {
        console.log('This is')
     }
 }

 //arrow syntax function refers to global scope 

 /*
 1. Functions allow to specify exactly when we want to call al lof this functionality
 2. the different syntaxes change the lexical 

 */

 const print = () => {
     console.log('I love to print text!')
 }

 const functionA = (f) => {
     console.log('FUNCTION A HAS BEEN ACTIVATED!');
     f()
 }

 const functionB = () => {
     console.log('function B has been called!')
 }

 const greet =  (person) => {
    console.log('HELLO!', person)
 }

 //parameter (person) in DOM just like in function 

 const blender = (string) => {
     return string.split('')
 }

 const square = (num, message) => {
    console.log("message:", message) 
    return num * num
 }

 //the order of your parameters matter when you reach them in your DOM********

 const functionC = () => {
     console.log('FUNTION C HAS BEEN CALLED!')
 }