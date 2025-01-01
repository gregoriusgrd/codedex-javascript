# DNA Sequence Generator 🧬
This project simulates a DNA sequence by randomly generating DNA triplets.

## How It Works
1. DNA Pieces:
DNA is made of four pieces: Adenine (A), Cytosine (C), Guanine (G), and Thymine (T).
```
const dnaPieces = ["A", "C", "G", "T"];
```
2. Generating the Sequence:
- Use a loop to build a 24-element myDNA array.
- In each loop iteration, pick three random DNA pieces using Math.random() and Math.floor().
- Combine the three randomly chosen pieces into a string and add it to the myDNA array.
3. Log the Result:
Finally, log the generated DNA sequence to the Console.

## Example Output
```
[
  "TAG", "GAG", "ATA", "AAC",
  "AAT", "CTT", "AGG", "TAG",
  "ATC", "ACT", "GAG", "TTA",
  "CTG", "ACG", "GAC", "TCC",
  "GTA", "ACT", "GCA", "GTA",
  "GCG", "GCT", "TCT", "TAA"
]
```
Check out the implementation in dna.js
