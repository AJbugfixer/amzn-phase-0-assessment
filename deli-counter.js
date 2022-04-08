// 1. Write your functions here
function takeANumber(arry, name){
    arry.push(name)
    return `Welcome, ${name}. You are number ${arry.length} in line.`
}

function nowServing(arry){
    if (arry.length > 0){
        return "Currently serving " + katzDeli.shift() + "."
    } else{
        return "There is nobody waiting to be served!."
    }
}

function line(arry) {
    if (arry.length > 0) {
        let lineNumber = ""
        for(let i = 0; i < arry.length; i++) {
            lineNumber += (i + 1) + "." + arry[i] + ".";
        }
        lineNumber = lineNumber.slice(0, -2);
        return `The line is currently: ${lineNumber} `;
    } else {
        return "The line is currently empty."
    }
}

// 2. Example Usage
const katzDeli = []

console.log(takeANumber(katzDeli, "Ada")) 
// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.

console.log(takeANumber(katzDeli, "Grace")) 
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.

console.log(takeANumber(katzDeli, "Kent")) 
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

console.log(line(katzDeli)) 
// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

console.log(nowServing(katzDeli))
// nowServing(katzDeli) //=> "Currently serving Ada."

console.log(line(katzDeli))
// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

console.log(takeANumber(katzDeli, "Matz"))
// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

console.log(line(katzDeli))
// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

console.log(nowServing(katzDeli))
// nowServing(katzDeli) //=> "Currently serving Grace."

console.log(line(katzDeli))
// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"