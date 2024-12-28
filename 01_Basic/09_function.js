// Diffferent ways to declare function

function addTwoNumber1(num1,num2){
    const sum = num1+num2  
    console.log(sum);
    return sum
}

addTwoNumber1(1,3)

const addTwoNumber2 = function(num1,num2){
    const sum = num1+num2
    console.log(sum)
    return sum
}

addTwoNumber2(3,5)

// Arrow Fuction --- Explicit return-- return keyword is mandatory

const addTwoNumber3 = (num1, num2)=>{
    const sum = num1+num2
    console.log(sum);
    return sum
}    

addTwoNumber3(7,3)

// Arrow Fuction --- Implicit return-- return keyword is not required

const addTwoNumber4 = (num1, num2)=> (console.log(num1+num2))

addTwoNumber4(2,6)