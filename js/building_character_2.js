const d6 = () => {
   return Math.floor(Math.random() * 7)
}

const d100 = () => {
  return Math.floor(Math.random() * 101)
}

// Generate characteristics
var strValue = (d6() + d6() + d6()) * 5
var conValue = (d6() + d6() + d6()) * 5
var dexValue = (d6() + d6() + d6()) * 5
var intValue = (d6() + d6() + 6) * 5
var sizValue = (d6() + d6() + 6) * 5
var powValue = (d6() + d6() + d6()) * 5
var appValue = (d6() + d6() + d6()) * 5
var eduValue = (d6() + d6() + 6) * 5
var lucValue = (d6() + d6() + d6()) * 5

var str = document.getElementById('str')
var con = document.getElementById('con')
var dex = document.getElementById('dex')
var int = document.getElementById('int')
var siz = document.getElementById('siz')
var pow = document.getElementById('pow')
var app = document.getElementById('app')
var edu = document.getElementById('edu')
var luc = document.getElementById('luc')

// Display widgets that need to be used
const age = localStorage.getItem('age')
var ageModifierDescriptionOne = document.getElementById('modifier-first-line')
var ageModifierDescriptionTwo = document.getElementById('modifier-second-line')
var modifierFieldOne = document.getElementById('age-modifier-1')
var modifierFieldTwo = document.getElementById('age-modifier-2')
var modifierFieldThree = document.getElementById('age-modifier-3')
var labelOne = document.querySelector('.label1')
var labelTwo = document.querySelector('.label2')
var labelThree = document.querySelector('.label3')
var inputOne = document.querySelector('#label1')
var inputTwo = document.querySelector('#label2')
var inputThree = document.querySelector('#label3')

if (age >= 15 && age <= 19) {
  ageModifierDescriptionOne.innerHTML = 'Based on your age, you need to subtract 5 points in total in STR and SIZ. Please enter each value in the following text field.'
  ageModifierDescriptionTwo.innerHTML = 'Since little knowledge you own about the world, your EDU will be substracted by 5. But, for unknown reasons, you feel lucky.'
  labelOne.innerHTML = 'How many STR you are willing to lose?';
  labelTwo.innerHTML = 'How many SIZ you are willing to lose?';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
} else if (age >= 20 && age <= 39) {
  ageModifierDescriptionOne.innerHTML = 'Based on your age, you got many experiences about the world, your EDU will be improved once.'
  ageModifierDescriptionOne.style.visibility = 'visible'
} else if (age >= 40 && age <= 49) {
  ageModifierDescriptionOne.innerHTML = 'Based on your age, you need to subtract 5 points in total in STR, CON or DEX. Please enter each value in the following text field.'
  ageModifierDescriptionTwo.innerHTML = 'Since you got many experiences about the world, your EDU will be improved twice. Age leaves many tracks on your face, your APP will be substracted by 5.'
  labelOne.innerHTML = 'How many STR you are willing to lose?';
  labelTwo.innerHTML = 'How many CON you are willing to lose?';
  labelThree.innerHTML = 'How many DEX you are willing to lose?';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else if (age >= 50 && age <= 59) {
  ageModifierDescriptionOne.innerHTML = 'Based on your age, you need to subtract 10 points in total in STR, CON or DEX. Please enter each value in the following text field.'
  ageModifierDescriptionTwo.innerHTML = 'Since you got many experiences about the world, your EDU will be improved 3 times. Age leaves many tracks on your face, your APP will be substracted by 10.'
  labelOne.innerHTML = 'How many STR you are willing to lose?';
  labelTwo.innerHTML = 'How many CON you are willing to lose?';
  labelThree.innerHTML = 'How many DEX you are willing to lose?';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else if (age >= 60 && age <= 69) {
  ageModifierDescriptionOne.innerHTML = 'Based on your age, you need to subtract 20 points in total in STR, CON or DEX. Please enter each value in the following text field.'
  ageModifierDescriptionTwo.innerHTML = 'Since you got many experiences about the world, your EDU will be improved 4 times.  Age leaves many tracks on your face, your APP will be substracted by 15.'
  labelOne.innerHTML = 'How many STR you are willing to lose?';
  labelTwo.innerHTML = 'How many CON you are willing to lose?';
  labelThree.innerHTML = 'How many DEX you are willing to lose?';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else if (age >= 70 && age <= 79) {
  ageModifierDescriptionOne.innerHTML = 'Based on your age, you need to subtract 40 points in total in STR, CON or DEX. Please enter each value in the following text field.'
  ageModifierDescriptionTwo.innerHTML = 'Since you got many experiences about the world, your EDU will be improved 4 times.  Age leaves many tracks on your face, your APP will be substracted by 20.'
  labelOne.innerHTML = 'How many STR you are willing to lose?';
  labelTwo.innerHTML = 'How many CON you are willing to lose?';
  labelThree.innerHTML = 'How many DEX you are willing to lose?';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else {
  ageModifierDescriptionOne.innerHTML = 'Based on your age, you need to subtract 80 points in total in STR, CON or DEX. Please enter each value in the following text field.'
  ageModifierDescriptionTwo.innerHTML = 'Since you got many experiences about the world, your EDU will be improved 4 times.  Age leaves many tracks on your face, your APP will be substracted by 25.'
  labelOne.innerHTML = 'How many STR you are willing to lose?';
  labelTwo.innerHTML = 'How many CON you are willing to lose?';
  labelThree.innerHTML = 'How many DEX you are willing to lose?';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
}

// Apply modification
const applyModifier = document.querySelector('.button3')
applyModifier.addEventListener('click', event => {
  if (age >= 15 && age <= 19) {

    var strMinus;
    var sizMinus;
    try {
      strMinus = parseInt(inputOne.value)
      sizMinus = parseInt(inputTwo.value)
    } catch (error) {
      alert('Please enter positive integers only.')
      inputOne.value = ''
      inputTwo.value = ''
      return
    }
    
    if (strMinus + sizMinus != 5 || strMinus < 0 || sizMinus < 0) {
      alert('You must substract exactly 5 points in total. Not negative values allowed.')
      inputOne.value = ''
      inputTwo.value = ''
      return
    }
    if (strMinus > strValue || sizMinus > sizValue) {
      alert('You cannot substract a value to negative.')
      inputOne.value = ''
      inputTwo.value = ''
      return
    }
    strValue -= strMinus
    sizValue -= sizMinus
    eduValue -= 5
    const tempLuc = (d6() + d6() + d6()) * 5;
    if (tempLuc > lucValue) {
      lucValue = tempLuc
    }

  } else if (age >= 20 && age <= 39) {

    eduImprovement()

  } else if (age >= 40 && age <= 49) {

    eduImprovement()
    eduImprovement()
    var strMinus;
    var conMinus;
    var dexMinus;
    try {
      strMinus = parseInt(inputOne.value)
      conMinus = parseInt(inputTwo.value)
      dexMinus = parseInt(inputThree.value)
    } catch (error) {
      alert('Please enter positive integers only.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 5 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('You must substract exactly 5 points in total. Not negative values allowed.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('You cannot substract a value to negative.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    strValue -= strMinus
    conValue -= conMinus
    dexValue -= dexMinus
    appValue -= 5

  } else if (age >= 50 && age <= 59) {

    eduImprovement()
    eduImprovement()
    eduImprovement()
    var strMinus;
    var conMinus;
    var dexMinus;
    try {
      strMinus = parseInt(inputOne.value)
      conMinus = parseInt(inputTwo.value)
      dexMinus = parseInt(inputThree.value)
    } catch (error) {
      alert('Please enter positive integers only.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 10 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('You must substract exactly 10 points in total. Not negative values allowed.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('You cannot substract a value to negative.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    strValue -= strMinus
    conValue -= conMinus
    dexValue -= dexMinus
    appValue -= 10

  } else if (age >= 60 && age <= 69) {

    eduImprovement()
    eduImprovement()
    eduImprovement()
    eduImprovement()
    var strMinus;
    var conMinus;
    var dexMinus;
    try {
      strMinus = parseInt(inputOne.value)
      conMinus = parseInt(inputTwo.value)
      dexMinus = parseInt(inputThree.value)
    } catch (error) {
      alert('Please enter positive integers only.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 20 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('You must substract exactly 20 points in total. Not negative values allowed.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('You cannot substract a value to negative.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    strValue -= strMinus
    conValue -= conMinus
    dexValue -= dexMinus
    appValue -= 15

  } else if (age >= 70 && age <= 79) {

    eduImprovement()
    eduImprovement()
    eduImprovement()
    eduImprovement()
    var strMinus;
    var conMinus;
    var dexMinus;
    try {
      strMinus = parseInt(inputOne.value)
      conMinus = parseInt(inputTwo.value)
      dexMinus = parseInt(inputThree.value)
    } catch (error) {
      alert('Please enter positive integers only.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 40 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('You must substract exactly 40 points in total. Not negative values allowed.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('You cannot substract a value to negative.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    strValue -= strMinus
    conValue -= conMinus
    dexValue -= dexMinus
    appValue -= 20

  } else {

    eduImprovement()
    eduImprovement()
    eduImprovement()
    eduImprovement()
    var strMinus;
    var conMinus;
    var dexMinus;
    try {
      strMinus = parseInt(inputOne.value)
      conMinus = parseInt(inputTwo.value)
      dexMinus = parseInt(inputThree.value)
    } catch (error) {
      alert('Please enter positive integers only.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 80 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('You must substract exactly 80 points in total. Not negative values allowed.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('You cannot substract a value to negative.')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    strValue -= strMinus
    conValue -= conMinus
    dexValue -= dexMinus
    appValue -= 25

  }

  applyModifier.disabled = true
  displayCharacter()

})

// Next step
const nextStep = document.querySelector('.button4')
nextStep.addEventListener('click', event => {
  if (!applyModifier.disabled) {
    alert('Apply modification before going foward.')
    return
  }
  localStorage.setItem('str', strValue)
  localStorage.setItem('con', conValue)
  localStorage.setItem('dex', dexValue)
  localStorage.setItem('int', intValue)
  localStorage.setItem('siz', sizValue)
  localStorage.setItem('pow', powValue)
  localStorage.setItem('app', appValue)
  localStorage.setItem('edu', eduValue)
  localStorage.setItem('luc', lucValue)
  location.href = 'building_character_3.html'
})

const valueColouring = (value, label) => {
  if (value >= 80) {
    label.style.color = 'red'
  } else if(value >= 50) {
    label.style.color = 'yellow'
  }
}

const valueCapping = (value, element) => {
  if (value > 99) {
    value = 99
  } else if (value < 0) {
    value = 0
  }
  element.innerHTML = value
}

const displayCharacter = () => {
  valueCapping(strValue, str)
  valueCapping(conValue, con)
  valueCapping(dexValue, dex)
  valueCapping(intValue, int)
  valueCapping(sizValue, siz)
  valueCapping(powValue, pow)
  valueCapping(appValue, app)
  valueCapping(eduValue, edu)
  valueCapping(lucValue, luc)
  valueColouring(strValue, str)
  valueColouring(conValue, con)
  valueColouring(dexValue, dex)
  valueColouring(intValue, int)
  valueColouring(sizValue, siz)
  valueColouring(powValue, pow)
  valueColouring(appValue, app)
  valueColouring(eduValue, edu)
  valueColouring(lucValue, luc)
}

const eduImprovement = () => {
  const checker = d100()
  if (checker > eduValue) {
    eduValue += 10
  }
}

displayCharacter()
