console.log('JavaScript is running!')
console.log('The JS Module is loaded!')
let score = 100

let h1 = document.createElement('h1')
h1.innerText = 'This came from JavaScript'
document.body.appendChild(h1)

const multiply = (n1, n2) => {
    console.log(n1, n2)
}

 const double = (n) => {
     return n * 2
 } 

 double (multiply(2, 4))
 //= 16
 //** doubles product of multiply parameters */

 let array = ['a', 'b', 'c', 'd']
 const determineLength = (arr) => {
    if (arr.length > 5) {
        return 'This array is long'
    }else {
        return 'This array is short '
    }
 }

 const outcome1 = determineLength(array)

 const askForString = () => {
     let str = prompt('ENTER A STRING')
     return str
 }
console.log(askForString().split(''))