// rock paper scissors

const player = 1;
let playerAnswer = " ";

if(player === 0){
  playerAnswer = "Rock"
} else if (player === 1){
  playerAnswer = "Paper"
} else if (player === 2){
  playerAnswer = "Scissors"
} else {
  console.log("Invalid input")
}

console.log("Player picked: ", playerAnswer)

const computer = Math.floor(Math.random() * 3)
let answer = " ";

if (computer === 0){
  answer = "Rock";
} else if (computer === 1){
  answer = "Paper";
} else if (computer === 2){
  answer = "Scissors"
} else {
  answer = "Invalid"
}

console.log("Computer picked: ", answer)

let result = "";

if (player === computer){
  result = "Tie"
} else if ((player === 0 && computer === 2) || (player === 1 && player === 0) || (player === 2 && computer === 1)){
  result = "The player won!"
} else {
  result = "The computer won!"
}

console.log(result)
