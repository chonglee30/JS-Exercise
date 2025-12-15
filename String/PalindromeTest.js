function palindromeCheck(word) {
  let firstIndex =0;
  let lastIndex = word.length -1;
  let panlindrome = true;

  while (lastIndex > firstIndex) {
    if (word.charAt(firstIndex) != word.charAt(lastIndex)) {
      panlindrome = false;
      return panlindrome;
    }

    firstIndex++
    lastIndex--
  }
  return panlindrome
}

function palindromeTest(word) {
  const reversedWord = word.split('').reverse().join('')

  if (word===reversedWord) {
    return true
  } else {
    return false
  }
}

console.log(palindromeCheck("madam"))
console.log(palindromeCheck("ana"))
console.log(palindromeCheck("manim"))
console.log("-----------------------")
console.log(palindromeTest("madam"))
console.log(palindromeTest("ana"))
console.log(palindromeTest("manim"))
