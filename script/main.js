// VARIABLES
const input = document.getElementById("number")
const btn = document.getElementById("convert-btn")
let output = document.getElementById("output")

// EXTRA
input.focus()

// EVENT LISTENERS
btn.addEventListener('click', () => {
  inputChecker()
  input.focus()
})
input.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    inputChecker()
  }
  if (e.key != "Enter") {
    output.innerText = ""
    output.style.fontSize = "1.3rem"
  }
})

// FUNCTIONS
function inputChecker() {
  const inputInt = parseInt(input.value)

  if (!input.value || isNaN(inputInt)) {
    output.innerText = "Please enter a valid number"
  } else if (inputInt <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1"
    output.style.fontSize = "1rem"
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
    output.style.fontSize = "1rem"
  } else {
    converter(inputInt)
  }
}

function converter(x) {
  const inputArray = [...`${x}`].map(Number).reverse()
  const romanToArabicRuler = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]]
  let romanArray = []

  for (const key in inputArray) {
    const currentNumber = inputArray[key]
    const romanNumber = romanToArabicRuler[key]

    if (currentNumber < 4) {
      romanArray.push(romanNumber[0].repeat(inputArray[key]))
    } else if (currentNumber > 4) {
      if (currentNumber === 9) {
        romanArray.push(romanNumber[0] + romanToArabicRuler[Number(key) + 1][0])

      } else {
        romanArray.push(romanNumber[1] + (romanNumber[0].repeat(inputArray[key] - 5)))

      }
    } else {
      romanArray.push(romanNumber[0] + romanNumber[1])
      console.log(romanNumber[0] + romanNumber[1])
    }
  }
  output.innerText= romanArray.reverse().join("")
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