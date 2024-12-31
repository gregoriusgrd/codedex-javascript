function isPalindrome (word) {
    lowerCaseWord = word.toLowerCase();
  
    splitWord = lowerCaseWord.split('');
    reversedWord = splitWord.reverse();
    joinWord = reversedWord.join('');
  
    if (lowerCaseWord === joinWord){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isPalindrome("asa"));
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("moonlight"));
  console.log(isPalindrome("aviary"));