// Exercise 3
let myNumber = 32
let numCheck = typeof (myNumber)


if (numCheck != 'number') {
    console.log(`Error. ${myNumber} is not a number`)
}

else if (myNumber % 2 === 0) {
    console.log(`${myNumber} is even`)
}

else {
    console.log(`${myNumber} is odd`)
}


// Exercise 4

let num1 = 1
let num2 = 2
let num3 = 3

// 1 and 2- 1 and 3   2 and 1 2 and 3

let check = typeof (num1) == "number" && typeof (num2) == "number" && typeof (num3) == "number"


if (check != true) {
    console.log("Error. Check input")
}
else if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`)
}

else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number`)
}

else {
    console.log(`${num3} is the largest number`)
}

// Exercise 5

let myGrade = 89

if (myGrade > 100 || myGrade < 0) {
    console.log("Error, grade must be from 0-100 only. Check input.")
}

else if (myGrade >= 90) {
    console.log("**A**")
}

// i dont have to specify less than 90 because if it was 90 or more it wouldve printed on previous if statement
else if (myGrade >= 80) {
    console.log("**B**")
}

else if (myGrade >= 70) {
    console.log("**C**")
}

else if (myGrade >= 60) {
    console.log("**D**")
}

else {
    console.log("**F**")
}

// Exercise 6
let multiply = 4
for (let i = 1; i < 11; i++) {
    console.log(i * multiply)
}

// Exercise 7

// need to num * (num -1) * (num -2) ... (until num=1)


let fact = []
let num = 8
for (let i = num; i > 0; i--) {
    fact.push(i)
}

console.log(fact)


let answer = fact.reduce((a, b) => a * b)
console.log(answer)


// Exercise 8
for (i = 1; i < 51; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} is a multiple of 3 and 5`);
    } else if (i % 3 == 0) {
        console.log(`${i} is a multiple of 3`);
    } else if (i % 5 == 0) {
        console.log(`${i} is a multiple of 5`);
    }
}