
const question = "Am i cooked?"; // Ask your question here

const randomNumber = Math.floor(Math.random() * 10)

let answer = " ";

if (randomNumber === 1) {
  answer = "Yes - definitely.";
} else if (randomNumber === 2) {
  answer = "It is decidedly so.";
} else if (randomNumber === 3) {
  answer = "Without a doubt." 
} else if (randomNumber === 4) {
  answer = "Reply hazy, try again."
} else if (randomNumber === 5) {
  answer = "Ask again later."
} else if (randomNumber === 6) {
  answer = "Better not tell you now."
} else if (randomNumber === 7) {
  answer = "My Sources say no."
} else if (randomNumber === 8) {
  answer = "Outlook not so good."
} else if (randomNumber === 9) {
  answer = "Very doubtful";
} else {
  console.log("Invalid")
}

console.log("Question: ", question);
console.log("Answer: ", answer)


