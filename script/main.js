// VARIABLES
const input = document.getElementById("number")
const btn = document.getElementById("convert-btn")
const output = document.getElementById("output")

// EVENT LISTENERS
btn.addEventListener('click', () => {
  inputChecker()
  input.focus()
})
input.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    inputChecker()
  }
})

// FUNCTIONS
function inputChecker() {
  const inputInt = parseInt(input.value)

  if (!input.value || isNaN(inputInt)) {
    output.innerText = "Please enter a valid number"
  } else if (inputInt <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
  } else {
    converter(inputInt)
  }
}

function converter(x) {
  const inputArray = [...`${x}`].map(Number).reverse()
  const romanToArabicRuler = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]]

  for (const key in inputArray) {
    const currentNumber = inputArray[key]
    const romanNumber = romanToArabicRuler[key]
    const fiveBreak = Number("4" + "0".repeat(key))
    const classBreak = Number("9" + "0".repeat(key))

    if (currentNumber < 4) {
      
    }

    console.log(fiveBreak)
    console.log(classBreak)
    // console.log(romanNumber.repeat(currentNumber))
  }
  
  if (inputArray.length ) {
    
  }

  if (input <= 3) {
    input * "I"
  } else {
    "IV"
  }
}

/*
    1. You should have an input element with an id of "number"
    2. You should have a button element with an id of "convert-btn"
    3. You should have a div, span or p element with an id of output
    4. When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
    5. When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
    6. When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
  7. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
  8.When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
  9. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
  10. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
  11. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"
*/