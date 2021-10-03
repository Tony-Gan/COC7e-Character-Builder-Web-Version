OCCUPATION_LIST = [
  'Accounting',
  'Animal handling',
  'Anthropology',
  'Appraise',
  'Art and craft',
  'Artillery',
  'Charm',
  'Climb',
  'Computer use',
  'Credit rating',
  'Cthulhu mythos',
  'Demolitions',
  'Disguise',
  'Diving',
  'Dodge',
  'Drive auto',
  'Electrical repair',
  'Electronics',
  'Fast talk',
  'Fighting',
  'Firearms',
  'First aid',
  'History',
  'Hypnosis',
  'Intimidate',
  'Jump',
  'Language(other)',
  'Language(own)',
  'Law',
  'Library use',
  'Listen',
  'Locksmith',
  'Lore',
  'Mechanical repair',
  'Medicine',
  'Natural world',
  'Navigation',
  'Occult',
  'Heavy machinery',
  'Persuade',
  'Pilot',
  'Psychoanalysis',
  'Psychology',
  'Read lips',
  'Ride',
  'Science',
  'Sleight of hand',
  'Spot hidden',
  'Stealth',
  'Survival',
  'Swim',
  'Throw',
  'Track',
  'Acting',
  'Astronomy',
  'Axe',
  'Biology',
  'Botany',
  'Bow',
  'Brawl',
  'Chainsaw',
  'Chemistry',
  'Cryptography',
  'Engineering',
  'Fine art',
  'Flail',
  'Flamethrower',
  'Forensics',
  'Forgery',
  'Garrote',
  'Geology',
  'Handgun',
  'Heavy weapons',
  'Machine gun',
  'Mathematics',
  'Meteorology',
  'Pharmacy',
  'Photography',
  'Physics',
  'Rifle',
  'Shotgun',
  'Spear',
  'Submachine gun',
  'Sword',
  'Whip',
  'Zoology',
  'Literature',
  'Latin',
  'Hebrew',
  'Other language',
  'Farming',
  'Technical drawing',
  'Instrument',
  'Pilot aircraft',
  'Pilot boat',
]

const creditLow = document.getElementById('step4-credit-1')
const creditHigh = document.getElementById('step4-credit-2')
const occupationName = localStorage.getItem('occupationName')
const occupationCredit = localStorage.getItem('occupationCredit').split(',')
const occupationPointsStr = localStorage.getItem('occupationPoints').split(',')
var occupationPoints;
if (occupationPointsStr.length == 1) {
  occupationPoints = parseInt(localStorage.getItem('edu')) * 4
} else {
  const charName = occupationPointsStr[1].toLowerCase()
  const eduPoints = parseInt(localStorage.getItem('edu')) * 2
  const otherPoints = parseInt(localStorage.getItem(charName)) * 2
  occupationPoints = eduPoints + otherPoints
}

document.getElementById('step4-oname').innerHTML = occupationName
document.getElementById('step4-credit-1').innerHTML = occupationCredit[0]
document.getElementById('step4-credit-2').innerHTML = occupationCredit[1]
document.getElementById('step4-points').innerHTML = occupationPoints

const skill1 = localStorage.getItem('occupationSkill1').split(',')
const skill2 = localStorage.getItem('occupationSkill2').split(',')
const skill3 = localStorage.getItem('occupationSkill3').split(',')
const skill4 = localStorage.getItem('occupationSkill4').split(',')
const skill5 = localStorage.getItem('occupationSkill5').split(',')
const skill6 = localStorage.getItem('occupationSkill6').split(',')
const skill7 = localStorage.getItem('occupationSkill7').split(',')
const skill8 = localStorage.getItem('occupationSkill8').split(',')

const s1 = document.getElementById('skill1')
skill1.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s1.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s1.appendChild(option)
  }
})

const s2 = document.getElementById('skill2')
skill2.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s2.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s2.appendChild(option)
  }
})

const s3 = document.getElementById('skill3')
skill3.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s3.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s3.appendChild(option)
  }
})

const s4 = document.getElementById('skill4')
skill4.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s4.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s4.appendChild(option)
  }
})

const s5 = document.getElementById('skill5')
skill5.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s5.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s5.appendChild(option)
  }
})

const s6 = document.getElementById('skill6')
skill6.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s6.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s6.appendChild(option)
  }
})

const s7 = document.getElementById('skill7')
skill7.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s7.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s7.appendChild(option)
  }
})

const s8 = document.getElementById('skill8')
skill8.forEach(skill => {
  var option;
  if (skill == 'Any Other Skill') {
    OCCUPATION_LIST.forEach(element => {
      option = document.createElement('option')
      option.innerHTML = element
      option.value = element
      s8.appendChild(option)
    });
  } else {
    option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
    s8.appendChild(option)
  }
})

const s9 = document.querySelector('#skill9')
var skill9 = document.createElement('option')
skill9.innerHTML = 'Credit rating'
skill9.value = 'Credit rating'
s9.appendChild(skill9)

const currentValueCalculate = (spanTag, inputTag, skillName) => {
  const span = document.querySelector(spanTag)
  const input = document.querySelector(inputTag)
  const skillValue = parseInt(localStorage.getItem(skillName))
  span.innerHTML = skillValue
  input.max = 90 - skillValue
}
document.getElementById('available-points').innerHTML = occupationPoints - parseInt(occupationCredit[0])

const name1 = document.getElementById('skill1')
const name2 = document.getElementById('skill2')
const name3 = document.getElementById('skill3')
const name4 = document.getElementById('skill4')
const name5 = document.getElementById('skill5')
const name6 = document.getElementById('skill6')
const name7 = document.getElementById('skill7')
const name8 = document.getElementById('skill8')
const name9 = document.getElementById('skill9')

currentValueCalculate('#s1 span', '#skill1-points', name1.value)
currentValueCalculate('#s2 span', '#skill2-points', name2.value)
currentValueCalculate('#s3 span', '#skill3-points', name3.value)
currentValueCalculate('#s4 span', '#skill4-points', name4.value)
currentValueCalculate('#s5 span', '#skill5-points', name5.value)
currentValueCalculate('#s6 span', '#skill6-points', name6.value)
currentValueCalculate('#s7 span', '#skill7-points', name7.value)
currentValueCalculate('#s8 span', '#skill8-points', name8.value)
currentValueCalculate('#s9 span', '#skill9-points', name9.value)

name1.addEventListener('change', event => {
  currentValueCalculate('#s1 span', '#skill1-points', name1.value)
})
name2.addEventListener('change', event => {
  currentValueCalculate('#s2 span', '#skill2-points', name2.value)
})
name3.addEventListener('change', event => {
  currentValueCalculate('#s3 span', '#skill3-points', name3.value)
})
name4.addEventListener('change', event => {
  currentValueCalculate('#s4 span', '#skill4-points', name4.value)
})
name5.addEventListener('change', event => {
  currentValueCalculate('#s5 span', '#skill5-points', name5.value)
})
name6.addEventListener('change', event => {
  currentValueCalculate('#s6 span', '#skill6-points', name6.value)
})
name7.addEventListener('change', event => {
  currentValueCalculate('#s7 span', '#skill7-points', name7.value)
})
name8.addEventListener('change', event => {
  currentValueCalculate('#s8 span', '#skill8-points', name8.value)
})
name9.addEventListener('change', event => {
  currentValueCalculate('#s9 span', '#skill9-points', name9.value)
})

const input1 = document.getElementById('skill1-points')
const input2 = document.getElementById('skill2-points')
const input3 = document.getElementById('skill3-points')
const input4 = document.getElementById('skill4-points')
const input5 = document.getElementById('skill5-points')
const input6 = document.getElementById('skill6-points')
const input7 = document.getElementById('skill7-points')
const input8 = document.getElementById('skill8-points')
const input9 = document.getElementById('skill9-points')

var inputs = [input1, input2, input3, input4, input5, input6, input7, input8, input9]

input9.value = parseInt(occupationCredit[0])
input9.min = parseInt(occupationCredit[0])
input9.max = parseInt(occupationCredit[1])

var value1 = parseInt(input1.value)
var value2 = parseInt(input2.value)
var value3 = parseInt(input3.value)
var value4 = parseInt(input4.value)
var value5 = parseInt(input5.value)
var value6 = parseInt(input6.value)
var value7 = parseInt(input7.value)
var value8 = parseInt(input8.value)
var value9 = parseInt(input9.value)

inputs.forEach(input => {
  input.addEventListener('change', event => {
    const usedPoints = parseInt(input.value)
    switch (input.name) {
      case 'skill1-points':
        value1 = usedPoints
        break;
      case 'skill2-points':
        value2 = usedPoints
        break;
      case 'skill3-points':
        value3 = usedPoints
        break;
      case 'skill4-points':
        value4 = usedPoints
        break;
      case 'skill5-points':
        value5 = usedPoints
        break;
      case 'skill6-points':
        value6 = usedPoints
        break;
      case 'skill7-points':
        value7 = usedPoints
        break;
      case 'skill8-points':
        value8 = usedPoints
        break;
      case 'skill9-points':
        value9 = usedPoints
        break;
    }
    document.getElementById('available-points').innerHTML = occupationPoints - value1 - value2 - value3 - value4 - value5 - value6 - value7 - value8 - value9
  })
})

const nextStep = document.querySelector('.button7')
nextStep.addEventListener('click', event => {
  const availablePoints = document.getElementById('available-points')
  if (parseInt(availablePoints.innerHTML) != 0) {
    alert('You must allocate exactly all occuational points to skills before proceeding.')
  }
  localStorage.setItem(name1.value, parseInt(localStorage.getItem(name1.value)) + parseInt(input1.value))
  localStorage.setItem(name2.value, parseInt(localStorage.getItem(name2.value)) + parseInt(input2.value))
  localStorage.setItem(name3.value, parseInt(localStorage.getItem(name3.value)) + parseInt(input3.value))
  localStorage.setItem(name4.value, parseInt(localStorage.getItem(name4.value)) + parseInt(input4.value))
  localStorage.setItem(name5.value, parseInt(localStorage.getItem(name5.value)) + parseInt(input5.value))
  localStorage.setItem(name6.value, parseInt(localStorage.getItem(name6.value)) + parseInt(input6.value))
  localStorage.setItem(name7.value, parseInt(localStorage.getItem(name7.value)) + parseInt(input7.value))
  localStorage.setItem(name8.value, parseInt(localStorage.getItem(name8.value)) + parseInt(input8.value))
  localStorage.setItem(name9.value, parseInt(localStorage.getItem(name9.value)) + parseInt(input9.value))
  location.href = 'building_character_5.html'
})