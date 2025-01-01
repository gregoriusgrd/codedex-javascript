// Write code below 💖

// DNA

const dnaPieces = ["A", "C", "G", "T"];
let myDNA = [];

for (let i = 0; i < 24; i++){
  let firstPiece = Math.floor(Math.random() * dnaPieces.length);
  let secondPiece = Math.floor(Math.random() * dnaPieces.length);
  let thirdPiece = Math.floor(Math.random() * dnaPieces.length);

  myDNA.push(dnaPieces[firstPiece] + dnaPieces[secondPiece] + dnaPieces[thirdPiece]);
}

console.log(myDNA)
