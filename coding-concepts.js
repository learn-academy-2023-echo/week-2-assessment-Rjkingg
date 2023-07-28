// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2023"
console.log(cohort.split(""))

// a) Your answer: "e" "c" "h" "o" "2" "0" "2" "3"
// b) Verify and explain:  The expected output was returned because the .split method will split the string and return subtrings. This is how we can also convert a string into an array
  //'E', 'c', 'h',
 // 'o', ' ', '2',
 // '0', '2', '3'

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: I believe that it will log an error; undefined, because the name parameter does not have "LEARN Student" inside of it. Name is serving as nothing more than a placeholder in the parameter.
// b) Verify and explain: undefined was the output because greeter was not assigned a value.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 console.log(multipliedByTwo)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain:[ 8, 10, 12, 14, 16 ] An array of numbers needed to be multiplied by two and so a variable was declared and a function was created. The .map method was used to iterate over each element and each of the values, (number parameters) were multiplied by two, in this anonymus function.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: The .filter method iterated through the array until the action of getting only the odd values out was completed. The value was set to  NOT equal to a mupltiple of 2 and perfomed that action, giving us a new array of all odd integers
// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain:Javascript was the answer because the Object, myCodingSkills has the language key with an array of values, ["JavaScript", "Ruby"]. Javascript is at the 0 index and that is what was console logged. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: I believe that there will be an error because "George" is not assigned to a key. Also, George cannot be in a class by itself
// b) Verify and explain: Learn { student: 'George', cohort: 'Echo', year: 2023 }
// By declaring the variable learnStudent, we created a new instance of an object "George". The method constructor passed in a name value and George was that value, assigned to the key, student
