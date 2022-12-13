
let intro = alert('Welcome to number analyzer')
let numberOne = Number(prompt("Type the first number"))
let numberTwo = Number(prompt("Type de second number"))

let sum;
function calculation(){
    alert(`The sum of two numbers is: ${numberOne + numberTwo}`)
    alert(`The subtraction  of two numbers is: ${numberOne - numberTwo}`)
    alert(`The multiplication  of two numbers is: ${numberOne * numberTwo}`)
    alert(`The division  of two numbers is: ${numberOne / numberTwo}`)
    alert(`The rest of two numbers is: ${numberOne % numberTwo}`)
    
}

calculation()

sum = numberOne + numberTwo

switch(sum % 2){
    case 0:
        alert('The result is evens: ' + sum)
    break;

    case 1:
        alert('The result is odds: ' + sum)
    break;
}

switch(true){
    case numberOne == numberTwo:
        alert('The numbers typed are the same: ')
    break;

    case numberOne != numberTwo:
        alert('The numbers typed are different: ')
    break;
}






