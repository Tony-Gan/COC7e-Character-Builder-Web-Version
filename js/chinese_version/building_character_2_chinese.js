const d6 = () => {
  return Math.floor(Math.random() * 6) + 1
}

const d100 = () => {
  return Math.floor(Math.random() * 100) + 1
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
  ageModifierDescriptionOne.innerHTML = '根据你的年龄，你需要在STR和SIZ中献祭共5点属性点，请在下方输入框中输入具体数值'
  ageModifierDescriptionTwo.innerHTML = '你太年轻了，世界对你来说充满了谜团，你的EDU属性被减去了5点，但不知道为什么，你感到一种属于你这个年龄段独有的幸运'
  labelOne.innerHTML = '你想从STR中献祭出多少属性点？';
  labelTwo.innerHTML = '你想从SIZ中献祭出多少属性点？';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
} else if (age >= 20 && age <= 39) {
  ageModifierDescriptionOne.innerHTML = '随着年龄增长，这个世界对你而言已不再陌生，你的EDU将会得到一次增长机会'
  ageModifierDescriptionOne.style.visibility = 'visible'
} else if (age >= 40 && age <= 49) {
  ageModifierDescriptionOne.innerHTML = '根据你的年龄，你需要在STR，CON以及DEX中献祭共5点属性点，请在下方输入框中输入具体数值'
  ageModifierDescriptionTwo.innerHTML = '随着年龄增长，这个世界对你而言已不再陌生，你的EDU将会得到两次增长机会，但岁月已经开始在你的脸上留下痕迹，你的APP将会减少5点'
  labelOne.innerHTML = '你想从STR中献祭出多少属性点？';
  labelTwo.innerHTML = '你想从CON中献祭出多少属性点？';
  labelThree.innerHTML = '你想从DEX中献祭出多少属性点？';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else if (age >= 50 && age <= 59) {
  ageModifierDescriptionOne.innerHTML = '根据你的年龄，你需要在STR，CON以及DEX中献祭共10点属性点，请在下方输入框中输入具体数值'
  ageModifierDescriptionTwo.innerHTML = '多年的摸爬滚打使你在这个年纪拥有了对世界独到的理解，你的EDU将会得到三次增长机会，但岁月已经开始在你的脸上留下痕迹，你的APP将会减少10点'
  labelOne.innerHTML = '你想从STR中献祭出多少属性点？';
  labelTwo.innerHTML = '你想从CON中献祭出多少属性点？';
  labelThree.innerHTML = '你想从DEX中献祭出多少属性点？';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else if (age >= 60 && age <= 69) {
  ageModifierDescriptionOne.innerHTML = '根据你的年龄，你需要在STR，CON以及DEX中献祭共20点属性点，请在下方输入框中输入具体数值'
  ageModifierDescriptionTwo.innerHTML = '六十知天命，这不仅来自于书本上的知识，更来自于你个人对这个世界的思考，你的EDU将会得到四次增长机会，脸上的皱纹不可避免地影响了你的魅力，你的APP将会减少15点'
  labelOne.innerHTML = '你想从STR中献祭出多少属性点？';
  labelTwo.innerHTML = '你想从CON中献祭出多少属性点？';
  labelThree.innerHTML = '你想从DEX中献祭出多少属性点？';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else if (age >= 70 && age <= 79) {
  ageModifierDescriptionOne.innerHTML = '根据你的年龄，你需要在STR，CON以及DEX中献祭共40点属性点，请在下方输入框中输入具体数值'
  ageModifierDescriptionTwo.innerHTML = '你过去的经验已经足够支撑得起对复杂世界的理解，你的EDU将会得到四次增长机会，密集的皱纹不可避免地影响了你的魅力，你的APP将会减少20点'
  labelOne.innerHTML = '你想从STR中献祭出多少属性点？';
  labelTwo.innerHTML = '你想从CON中献祭出多少属性点？';
  labelThree.innerHTML = '你想从DEX中献祭出多少属性点？';
  ageModifierDescriptionOne.style.visibility = 'visible'
  ageModifierDescriptionTwo.style.visibility = 'visible'
  labelOne.style.visibility = 'visible'
  labelTwo.style.visibility = 'visible'
  labelThree.style.visibility = 'visible'
  inputOne.style.visibility = 'visible'
  inputTwo.style.visibility = 'visible'
  inputThree.style.visibility = 'visible'
} else {
  ageModifierDescriptionOne.innerHTML = '根据你的年龄，你需要在STR，CON以及DEX中献祭共80点属性点，请在下方输入框中输入具体数值'
  ageModifierDescriptionTwo.innerHTML = '你过去的经验已经足够支撑得起对复杂世界的理解，你的EDU将会得到四次增长机会，密集的皱纹和松垮的皮肤不可避免地影响了你的魅力，你的APP将会减少25点'
  labelOne.innerHTML = '你想从STR中献祭出多少属性点？';
  labelTwo.innerHTML = '你想从CON中献祭出多少属性点？';
  labelThree.innerHTML = '你想从DEX中献祭出多少属性点？';
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
      alert('不要调戏神明，请输入正整数！')
      inputOne.value = ''
      inputTwo.value = ''
      return
    }
    
    if (strMinus + sizMinus != 5 || strMinus < 0 || sizMinus < 0) {
      alert('你必须献祭整5点属性点，并且你不能扣除负数的属性点（你以为我没想到吗）')
      inputOne.value = ''
      inputTwo.value = ''
      return
    }
    if (strMinus > strValue || sizMinus > sizValue) {
      alert('你不能将一个属性降低至负数')
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
      alert('不要调戏神明，请输入正整数！')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 5 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('你必须献祭整5点属性点，并且你不能扣除负数的属性点（你以为我没想到吗）')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('你不能将一个属性降低至负数')
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
      alert('不要调戏神明，请输入正整数！')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 10 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('你必须献祭整10点属性点，并且你不能扣除负数的属性点（你以为我没想到吗）')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('你不能将一个属性降低至负数')
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
      alert('不要调戏神明，请输入正整数！')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 20 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('你必须献祭整20点属性点，并且你不能扣除负数的属性点（你以为我没想到吗）')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('你不能将一个属性降低至负数')
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
      alert('不要调戏神明，请输入正整数！')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 40 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('你必须献祭整40点属性点，并且你不能扣除负数的属性点（你以为我没想到吗）')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('你不能将一个属性降低至负数')
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
      alert('不要调戏神明，请输入正整数！')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus + conMinus + dexMinus != 80 || strMinus < 0 || conMinus < 0 || dexMinus < 0) {
      alert('你必须献祭整80点属性点，并且你不能扣除负数的属性点（你以为我没想到吗）')
      inputOne.value = ''
      inputTwo.value = ''
      inputThree.value = ''
      return
    }
    if (strMinus > strValue || conMinus > conValue || dexMinus > dexValue) {
      alert('你不能将一个属性降低至负数')
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
    alert('在进入下一步之前，请先应用修改')
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
  location.href = 'building_character_3_chinese.html'
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
