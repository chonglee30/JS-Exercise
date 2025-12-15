function anagramCheck(source, destination) {

  let anagram = true;

  if (source.length !== destination.length) {
    return false
  }

  let destinationArray = destination.split('')
  destinationArray.forEach(str => {
    const index = source.indexOf(str)
    if (index === -1)
     anagram = false;
  });

  return anagram;
}

console.log(anagramCheck("cinema", "iceman"))
console.log(anagramCheck("cinema", "icemaps"))