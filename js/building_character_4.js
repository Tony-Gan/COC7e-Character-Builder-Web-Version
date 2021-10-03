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
if (occupationPointsStr.length == 2) {
  occupationPoints = parseInt(localStorage.getItem('edu')) * 4
} else if (occupationPointsStr.length == 4) {
  const eduPoints = parseInt(localStorage.getItem('edu')) * 2
  const otherPoints = parseInt(localStorage.getItem(occupationPointsStr[2])) * 2
  occupationPoints = eduPoints + otherPoints
} else {
  const char1 = parseInt(localStorage.getItem(occupationPointsStr[2]))
  const char2 = parseInt(localStorage.getItem(occupationPointsStr[3]))
  const eduPoints = parseInt(localStorage.getItem('edu')) * 2
  var otherPoints;
  if (char1 > char2) {
    otherPoints = parseInt(localStorage.getItem(occupationPointsStr[2])) * 2
  } else {
    otherPoints = parseInt(localStorage.getItem(occupationPointsStr[3])) * 2
  }
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
  const option = document.createElement('option')
  option.innerHTML = skill
  option.value = skill
  s1.appendChild(option)
})

const s2 = document.getElementById('skill2')
skill2.forEach(skill => {
  const option = document.createElement('option')
  option.innerHTML = skill
  option.value = skill
  s2.appendChild(option)
})

const s3 = document.getElementById('skill3')
skill3.forEach(skill => {
  const option = document.createElement('option')
  option.innerHTML = skill
  option.value = skill
  s3.appendChild(option)
})

const s4 = document.getElementById('skill4')
skill4.forEach(skill => {
  const option = document.createElement('option')
  option.innerHTML = skill
  option.value = skill
  s4.appendChild(option)
})

const s5 = document.getElementById('skill5')
skill5.forEach(skill => {
  if (skill == 'Any Other Skill') {
    skill = OCCUPATION_LIST
  }
  const option = document.createElement('option')
  option.innerHTML = skill
  option.value = skill
  s5.appendChild(option)
})

const s6 = document.getElementById('skill6')
skill6.forEach(skill => {
  if (skill == 'Any Other Skill') {
    skill = OCCUPATION_LIST
  }
  const option = document.createElement('option')
  option.innerHTML = skill
  option.value = skill
  s6.appendChild(option)
})

const s7 = document.getElementById('skill7')
skill7.forEach(skill => {
  if (skill == 'Any Other Skill') {
    skill = OCCUPATION_LIST
  }
  const option = document.createElement('option')
  option.innerHTML = skill
  option.value = skill
  s7.appendChild(option)
})

const s8 = document.getElementById('skill8')
skill8.forEach(skill => {
  if (skill == 'Any Other Skill') {
    skill = OCCUPATION_LIST
    skill.forEach(element => {
      const option = document.createElement('option')
      option.innerHTML = element
      option.value = element
    });
  } else {
    const option = document.createElement('option')
    option.innerHTML = skill
    option.value = skill
  }
  s8.appendChild(option)
})