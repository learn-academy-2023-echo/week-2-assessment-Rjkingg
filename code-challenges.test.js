// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// a) Create a test with expect statements for each of the variables provided.

//Input:number
//Output:number evenly divisble by 3 or not

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"

// describe("divBy3", () => {
//     it("return 15 is divisible by three", () => {
//         expect(divBy3(15, 3)).toEqual(5)
//     })
// })

// //Function
// const divBy3 = { number: 15 }  
// if (number % 3){
//     return `${number} is evenly divisible by three`
// } else return `${number} is not evenly divisible by three`
   
//Comments: The test had a good failure but the function that I created left an error of 'return' outside of function. return `${number} is evenly divisible by three`. I altered the code and the same error occurred. 
//  if (number % 3)
//     > 31 |     return `${number} is evenly divisible by three`
//     |     ^
//  32 |  else return `${number} is not evenly divisible by three`
// The above error is the what I am referencing when I say that I altered the code. I see that functions that live within an object are called methods and when viewing examples, I see key value pairs, but I was not sure what the value would be and how to incorperate it into the written code. The error message displayed makes me wonder if the code is correct, but just a misplacement of the return- I am not too sure. Same thing applies to all code in this question. My Pseduo code is below the other challenges.

// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
const div3 = { number: 0 }  
if (number % 3){
    return `${number} is evenly divisible by three`
} else return `${number} is not evenly divisible by three`

// describe("divBy3", () => {
//     it("return 0 is divisible by three", () => {
//         expect(divBy3(0, 3)).toEqual(0)
//     })
// })

// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
// describe("notDivBy3", () => {
//     it("return -7 is not divisible by three", () => {
//         expect(divBy3(-7, 3)).toEqual(2)
//     })
// })

const notDivBy3 = { number: -7 }  
if (number % 3){
    return `${number} is evenly divisible by three`
} else return `${number} is not evenly divisible by three`
// b) Create the function that makes the test pass.


// Pseudo code: //----> 1. Create Method (Function belonging to object)
//----> 2. Declare variable using const and object name 
//----> 3. Create function that takes in object number and determine of it is divisble by 3 using % operator. 
//----> 4. Create if else statement outputting if number is even or odd
//----> 4. Return statement: `${num} is evenly divisible by three` OR `${num} is evenly divisible by three`

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//Input:An array of words
//Output: An array with all words capitalized

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"]
describe("allUpper", () => {
    it("return an array with all words capititalized", () => {
        expect(randomNouns1("streetlamp", "potato", "teeth", "conclusion", "nephew")).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"])
    })
})

const allUpper = (string) => {
    return string.split("").toUpperCase(randomNouns1)
    }

const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"]
describe("allUpper2", () => {
    it("return an array with all words capititalized", () => {
        expect(randomNouns2("temperature", "database", "chopsticks", "mango")).toEqual("TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGOemperature", "Database", "Chopsticks", "Mango")
    })
})

const randomNounss = (string) => {
    let newArr = ["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"]
    return string.split("").toUpperCase
    }

 //TypeError: (*test statements variables*) is not a function
// I received an error that said randomNouns was not a function. Prior to creating the function above, I did have a good failure. I am not too sure about if it is the code that caused a bad failure. I passed a string through the parameter and I returned the string, split so that it converted the array into a string, and added the .toUpperCase to turn all words into uppercase strings. I tried several variations of code and all came back with errors.


// b) Create the function that makes the test pass.



// Pseudo code:
//----> 1. Create Function syntax
//----> 2. Declare variable using const and array name 
//----> 3. Create function that takes in an array of words 
//----> 4. Use .map() method to filter over words
//----> 5. Use .toUpperCase on string to turn string into string with all caps
//----> 6. Return array with all words capitalized

// const animalWord = (arr) => {
//   return arr.map(value => value = "I am " + value.type + " and I am " + value.age + " years old. My name is " + value.name + "." )
// }
// console.log(animalWord(animals))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//Input:String
//Output:Number of first index

const vowelTester1 = "learn"
//Expected output: 1

describe("firstVowel", () => {
    it("return first vowel of first index", () => {
        expect(vowelTester1("learn")).toEqual(1)
    })
})
const vowelTester2 = "academy"
// Expected output: 0
describe("firstVowel", () => {
    it("return first vowel of first index", () => {
        expect(vowelTester2("academy")).toEqual(0)
    })
})
const vowelTester3 = "challenges"
Expected output: 2
describe("firstVowel", () => {
    it("return first vowel of first index", () => {
        expect(vowelTester3("challenges")).toEqual(2)
    })
})

// b) Create the function that makes the test pass.


// Pseudo code: 
//----> 1. Create Function syntax
//----> 2. Declare variable using const 
//----> 3. Create function that takes in a string of words
//----> 4. Use .indexOf() method to return the position of the first occurrence of a value in a string
//----> 5. Return a number associated with first index of string

const firstVowel = (string) => {
    let vowelArr = ["a", "e", "i", "o", "u"]
    return string.split("").map(letter => {
      if (vowelArr.includes(letter)[1]){
        return 
      } else {
        return letter 
      }
    }).join("")
  }
  
//With this problem, I had a difficult time creating the code. Specifically, the placement of the index. That was my biggest blocker.