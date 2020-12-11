const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials
}

//for each string in the tutorials array
//split the String into an array of words
//for each word in string, titlecase (titleizeWord(word))

const upcasedString = arr.map(function(word) {
	titleizeWord(word)
  upcasedString.join( ' ')
})

//method to titlecase a word
function titleizeWord(word) {
  let adjustedWord = word.charAt(0).toUpperCase() + word.slice(1)
  return adjustedWord
}

//for each tutorial array, titleizeWord(word) and returns new array from that
