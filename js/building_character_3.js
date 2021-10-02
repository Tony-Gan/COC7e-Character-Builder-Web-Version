const d6 = () => {
  return Math.floor(Math.random() * 7)
}

const d4 = () => {
 return Math.floor(Math.random() * 5)
}

const str = document.getElementById('str')
const con = document.getElementById('con')
const dex = document.getElementById('dex')
const int = document.getElementById('int')
const siz = document.getElementById('siz')
const pow = document.getElementById('pow')
const app = document.getElementById('app')
const edu = document.getElementById('edu')
const luc = document.getElementById('luc')
const valueColouring = (value, label) => {
  if (value >= 80) {
    label.style.color = 'red'
  } else if(value >= 50) {
    label.style.color = 'yellow'
  }
}
valueColouring(localStorage.getItem('str'), str)
valueColouring(localStorage.getItem('con'), con)
valueColouring(localStorage.getItem('dex'), dex)
valueColouring(localStorage.getItem('int'), int)
valueColouring(localStorage.getItem('siz'), siz)
valueColouring(localStorage.getItem('pow'), pow)
valueColouring(localStorage.getItem('app'), app)
valueColouring(localStorage.getItem('edu'), edu)
valueColouring(localStorage.getItem('luc'), luc)
str.innerHTML = localStorage.getItem('str')
con.innerHTML = localStorage.getItem('con')
dex.innerHTML = localStorage.getItem('dex')
int.innerHTML = localStorage.getItem('int')
siz.innerHTML = localStorage.getItem('siz')
pow.innerHTML = localStorage.getItem('pow')
app.innerHTML = localStorage.getItem('app')
edu.innerHTML = localStorage.getItem('edu')
luc.innerHTML = localStorage.getItem('luc')

const ACCOUNTING = 'Accounting'
const ANIMAL_HANDLING = 'Animal handling'
const ANTHROPOLOGY = 'Anthropology'
const APPRAISE = 'Appraise'
const ART_CRAFT = 'Art and craft'
const ARTILLERY = 'Artillery'
const CHARM = 'Charm'
const CLIMB = 'Climb'
const COMPUTER_USE = 'Computer use'
const CREDIT_RATING = 'Credit rating'
const CTHULHU_MYTHOS = 'Cthulhu mythos'
const DEMOLITIONS = 'Demolitions'
const DISGUISE = 'Disguise'
const DIVING = 'Diving'
const DODGE = 'Dodge'
const DRIVE_AUTO = 'Drive auto'
const ELECTRICAL_REPAIR = 'Electrical repair'
const ELECTRONICS = 'Electronics'
const FAST_TALK = 'Fast talk'
const FIGHTING = 'Fighting'
const FIREARMS = 'Firearms'
const FIRST_AID = 'First aid'
const HISTORY = 'History'
const HYPNOSIS = 'Hypnosis'
const INTIMIDATE = 'Intimidate'
const JUMP = 'Jump'
const LANGUAGE_OTHER = 'Language(other)'
const LANGUAGE_OWN = 'Language(own)'
const LAW = 'Law'
const LIBRARY_USE = 'Library use'
const LISTEN = 'Listen'
const LOCKSMITH = 'Locksmith'
const LORE = 'Lore'
const MECHANICAL_REPAIR = 'Mechanical repair'
const MEDICINE = 'Medicine'
const NATURAL_WORLD = 'Natural world'
const NAVIGATION = 'Navigation'
const OCCULT = 'Occult'
const OPERATE_HEAVY_MACHINERY = 'Heavy machinery'
const PERSUADE = 'Persuade'
const PILOT = 'Pilot'
const PSYCHOANALYSIS = 'Psychoanalysis'
const PSYCHOLOGY = 'Psychology'
const READ_LIPS = 'Read lips'
const RIDE = 'Ride'
const SCIENCE = 'Science'
const SLEIGHT_OF_HAND = 'Sleight of hand'
const SPOT_HIDDEN = 'Spot hidden'
const STEALTH = 'Stealth'
const SURVIVAL = 'Survival'
const SWIM = 'Swim'
const THROW = 'Throw'
const TRACK = 'Track'
const ACTING = 'Acting'
const ASTRONOMY = 'Astronomy'
const AXE = 'Axe'
const BIOLOGY = 'Biology'
const BOTANY = 'Botany'
const BOW = 'Bow'
const BRAWL = 'Brawl'
const CHAINSAW = 'Chainsaw'
const CHEMISTRY = 'Chemistry'
const CRYPTOGRAPHY = 'Cryptography'
const ENGINEERING = 'Engineering'
const FINE_ART = 'Fine art'
const FLAIL = 'Flail'
const FLAMETHROWER = 'Flamethrower'
const FORENSICS = 'Forensics'
const FORGERY = 'Forgery'
const GARROTE = 'Garrote'
const GEOLOGY = 'Geology'
const HANDGUN = 'Handgun'
const HEAVY_WEAPONS = 'Heavy weapons'
const MACHINE_GUN = 'Machine gun'
const MATHEMATICS = 'Mathematics'
const METEOROLOGY = 'Meteorology'
const PHARMACY = 'Pharmacy'
const PHOTOGRAPHY = 'Photography'
const PHYSICS = 'Physics'
const RIFLE = 'Rifle'
const SHOTGUN = 'Shotgun'
const SPEAR = 'Spear'
const SUBMACHINE_GUN = 'Submachine gun'
const SWORD = 'Sword'
const WHIP = 'Whip'
const ZOOLOGY = 'Zoology'
const LITERATURE = 'Literature'
const LATIN = 'Latin'
const HEBREW = 'Hebrew'
const NON_OWN_LANGUAGE = 'Other language'
const FARMING = 'Farming'
const TECHNICAL_DRAWING = 'Technical drawing'
const INSTRUMENT = 'Instrument'
const PILOT_AIRCRAFT = 'Pilot aircraft'
const PILOT_BOAT = 'Pilot boat'
const OTHER = 'Any Other Skill'

const SCIENCE_SKILLS = [
  ASTRONOMY,
  BIOLOGY,
  BOTANY,
  CHEMISTRY,
  CRYPTOGRAPHY,
  ENGINEERING,
  FORENSICS,
  GEOLOGY,
  MATHEMATICS,
  METEOROLOGY,
  PHARMACY,
  PHYSICS,
  ZOOLOGY
]

const ART_CRAFT_SKILLS = [
  ACTING,
  FARMING,
  FINE_ART,
  FORGERY,
  INSTRUMENT,
  LITERATURE,
  PHOTOGRAPHY,
  TECHNICAL_DRAWING,
]

const FIGHTING_SKILLS = [
  AXE,
  BRAWL,
  CHAINSAW,
  FLAIL,
  GARROTE
]

const FIREARMS_SKILLS = [
  BOW,
  FLAMETHROWER,
  HANDGUN,
  MACHINE_GUN,
  RIFLE,
  SHOTGUN,
  SUBMACHINE_GUN
]

const LANGUAGE_OTHER_SKILLS = [
  LATIN,
  HEBREW,
  NON_OWN_LANGUAGE
]

const PILOT_SKILLS = [
  PILOT_BOAT,
  PILOT_AIRCRAFT
]

const INTERPERSONAL_SKILLS = [
  CHARM,
  FAST_TALK,
  INTIMIDATE,
  PERSUADE
]

const OCCUPATION_LIST = [
  ANTIQUARIAN = {
    'name': 'Antiquarian',
    'occupation_points': [['edu', 4],],
    'credit_rating': [30, 70],
    'skills': [
        APPRAISE,
        ART_CRAFT_SKILLS,
        HISTORY,
        LIBRARY_USE,
        LANGUAGE_OTHER_SKILLS,
        INTERPERSONAL_SKILLS,
        SPOT_HIDDEN,
        OTHER
    ]
  },

  ARTIST = {
    'name': 'Artist',
    'occupation_points': [['edu', 2], ['pow', 'dex', 2]],
    'credit_rating': [9, 50],
    'skills': [
        ART_CRAFT_SKILLS,
        [HISTORY, NATURAL_WORLD],
        INTERPERSONAL_SKILLS,
        LANGUAGE_OTHER_SKILLS,
        PSYCHOLOGY,
        SPOT_HIDDEN,
        OTHER,
        OTHER
    ]
  },

  ATHLETE = {
    'name': 'Athlete',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [9, 70],
    'skills': [
        CLIMB,
        JUMP,
        BRAWL,
        RIDE,
        INTERPERSONAL_SKILLS,
        SWIM,
        THROW,
        OTHER
    ]
  },

  AUTHOR = {
    'name': 'Author',
    'occupation_points': [['edu', 4],],
    'credit_rating': [9, 30],
    'skills': [
        LITERATURE,
        HISTORY,
        LIBRARY_USE,
        [NATURAL_WORLD, OCCULT],
        LANGUAGE_OTHER_SKILLS,
        LANGUAGE_OWN,
        PSYCHOLOGY,
        OTHER
    ]
  },

  CLERGY = {
    'name': 'Clergy',
    'occupation_points': [['edu', 4],],
    'credit_rating': [9, 60],
    'skills': [
        ACCOUNTING,
        HISTORY,
        LIBRARY_USE,
        LISTEN,
        LANGUAGE_OTHER_SKILLS,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        OTHER
    ]
  },

  CRIMINAL = {
    'name': 'Criminal',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [5, 65],
    'skills': [
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        SPOT_HIDDEN,
        STEALTH,
        [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MECHANICAL_REPAIR, SLEIGHT_OF_HAND],
        [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MECHANICAL_REPAIR, SLEIGHT_OF_HAND],
        [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MECHANICAL_REPAIR, SLEIGHT_OF_HAND],
        [APPRAISE, DISGUISE, FIGHTING_SKILLS, FIREARMS_SKILLS, LOCKSMITH, MECHANICAL_REPAIR, SLEIGHT_OF_HAND]
      ]
  },

  DILETTANTE = {
    'name': 'Dilettante',
    'occupation_points': [['edu', 2], ['app', 2]],
    'credit_rating': [50, 99],
    'skills': [
        ART_CRAFT_SKILLS,
        FIREARMS_SKILLS,
        LANGUAGE_OTHER_SKILLS,
        RIDE,
        INTERPERSONAL_SKILLS,
        OTHER,
        OTHER,
        OTHER
    ]
  },

  DOCTOR_OF_MEDICINE = {
    'name': 'Doctor of Medicine',
    'occupation_points': [['edu', 4],],
    'credit_rating': [30, 80],
    'skills': [
        FIRST_AID,
        LATIN,
        MEDICINE,
        PSYCHOLOGY,
        BIOLOGY,
        PHARMACY,
        OTHER,
        OTHER
    ]
  },

  DRIFTER = {
    'name': 'Drifter',
    'occupation_points': [['edu', 2], ['app', 'dex', 2]],
    'credit_rating': [0, 5],
    'skills': [
        CLIMB,
        JUMP,
        LISTEN,
        NAVIGATION,
        INTERPERSONAL_SKILLS,
        STEALTH,
        OTHER,
        OTHER
    ]
  },

  ENGINEER = {
    'name': 'Engineer',
    'occupation_points': [['edu', 4],],
    'credit_rating': [30, 60],
    'skills': [
        TECHNICAL_DRAWING,
        ELECTRICAL_REPAIR,
        LIBRARY_USE,
        MECHANICAL_REPAIR,
        OPERATE_HEAVY_MACHINERY,
        ENGINEERING,
        PHYSICS,
        OTHER
    ]
  },

  ENTERTAINER = {
    'name': 'Entertainer',
    'occupation_points': [['edu', 2], ['app', 2]],
    'credit_rating': [9, 70],
    'skills': [
        ACTING,
        DISGUISE,
        INTERPERSONAL_SKILLS,
        INTERPERSONAL_SKILLS,
        LISTEN,
        PSYCHOLOGY,
        OTHER,
        OTHER
    ]
  },

  FARMER = {
    'name': 'Farmer',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [9, 30],
    'skills': [
        FARMING,
        DRIVE_AUTO,
        INTERPERSONAL_SKILLS,
        MECHANICAL_REPAIR,
        NATURAL_WORLD,
        OPERATE_HEAVY_MACHINERY,
        TRACK,
        OTHER,
        OTHER
    ]
  },

  HACKER = {
    'name': 'Hacker',
    'occupation_points': [['edu', 4],],
    'credit_rating': [10, 70],
    'skills': [
        COMPUTER_USE,
        ELECTRICAL_REPAIR,
        ELECTRONICS,
        LIBRARY_USE,
        SPOT_HIDDEN,
        INTERPERSONAL_SKILLS,
        OTHER,
        OTHER
    ]
  },

  JOURNALIST = {
    'name': 'Journalist',
    'occupation_points': [['edu', 4],],
    'credit_rating': [9, 30],
    'skills': [
        PHOTOGRAPHY,
        HISTORY,
        LIBRARY_USE,
        LANGUAGE_OWN,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        OTHER,
        OTHER
    ]
  },

  LAWYER = {
    'name': 'Lawyer',
    'occupation_points': [['edu', 4],],
    'credit_rating': [30, 80],
    'skills': [
        ACCOUNTING,
        LAW,
        LIBRARY_USE,
        INTERPERSONAL_SKILLS,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        OTHER,
        OTHER
    ]
  },

  LIBRARIAN = {
    'name': 'Librarian',
    'occupation_points': [['edu', 4],],
    'credit_rating': [9, 35],
    'skills': [
        ACCOUNTING,
        LIBRARY_USE,
        LANGUAGE_OTHER_SKILLS,
        LANGUAGE_OWN,
        OTHER,
        OTHER,
        OTHER,
        OTHER
    ]
  },

  MILITARY_OFFICER = {
    'name': 'Military officer',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [20, 70],
    'skills': [
        ACCOUNTING,
        FIREARMS_SKILLS,
        NAVIGATION,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        SURVIVAL,
        OTHER,
        OTHER
    ]
  },

  MISSIONARY = {
    'name': 'Missionary',
    'occupation_points': [['edu', 4],],
    'credit_rating': [0, 30],
    'skills': [
        ART_CRAFT_SKILLS,
        FIRST_AID,
        MECHANICAL_REPAIR,
        MEDICINE,
        NATURAL_WORLD,
        INTERPERSONAL_SKILLS,
        OTHER,
        OTHER
    ]
  },

  MUSICIAN = {
    'name': 'Musician',
    'occupation_points': [['edu', 2], ['dex', 'pow', 2]],
    'credit_rating': [9, 30],
    'skills': [
        INSTRUMENT,
        INTERPERSONAL_SKILLS,
        LISTEN,
        PSYCHOLOGY,
        OTHER,
        OTHER,
        OTHER,
        OTHER
    ]
  },

  PARAPSYCHOLOGIST = {
    'name': 'Parapsychologist',
    'occupation_points': [['edu', 4],],
    'credit_rating': [9, 30],
    'skills': [
        ANTHROPOLOGY,
        PHOTOGRAPHY,
        HISTORY,
        LIBRARY_USE,
        OCCULT,
        LANGUAGE_OTHER_SKILLS,
        PSYCHOLOGY,
        OTHER
    ]
  },

  NAVIGATOR = {
    'name': 'Pilot',
    'occupation_points': [['edu', 2], ['dex', 2]],
    'credit_rating': [20, 70],
    'skills': [
        ELECTRICAL_REPAIR,
        MECHANICAL_REPAIR,
        NAVIGATION,
        OPERATE_HEAVY_MACHINERY,
        ASTRONOMY,
        PILOT_AIRCRAFT,
        OTHER,
        OTHER
    ]
  },

  POLICE_DETECTIVE = {
    'name': 'Police detective',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [20, 50],
    'skills': [
        ACTING,
        DISGUISE,
        FIREARMS_SKILLS,
        LAW,
        LISTEN,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        SPOT_HIDDEN,
        OTHER
    ]
  },

  POLICE_OFFICER = {
    'name': 'Police officer',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [9, 30],
    'skills': [
        BRAWL,
        FIREARMS_SKILLS,
        FIRST_AID,
        INTERPERSONAL_SKILLS,
        LAW,
        PSYCHOLOGY,
        SPOT_HIDDEN,
        [DRIVE_AUTO, RIDE]
    ]
  },

  PRIVATE_INVESTIGATOR = {
    'name': 'Private investigator',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [9, 30],
    'skills': [
        PHOTOGRAPHY,
        DISGUISE,
        LAW,
        LIBRARY_USE,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        SPOT_HIDDEN,
        OTHER
    ]
  },

  PROFESSOR = {
    'name': 'Professor',
    'occupation_points': [['edu', 4],],
    'credit_rating': [20, 70],
    'skills': [
        LIBRARY_USE,
        LANGUAGE_OTHER_SKILLS,
        LANGUAGE_OWN,
        PSYCHOLOGY,
        OTHER,
        OTHER,
        OTHER,
        OTHER
    ]
  },

  SOLDIER = {
    'name': 'Soldier',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [9, 30],
    'skills': [
        [CLIMB, SWIM],
        DODGE,
        FIGHTING_SKILLS,
        FIREARMS_SKILLS,
        STEALTH,
        SURVIVAL,
        [FIRST_AID, MECHANICAL_REPAIR, LANGUAGE_OTHER_SKILLS],
        [FIRST_AID, MECHANICAL_REPAIR, LANGUAGE_OTHER_SKILLS]
    ]
  },

  TRIBE_MEMBER = {
    'name': 'Tribe member',
    'occupation_points': [['edu', 2], ['dex', 'str', 2]],
    'credit_rating': [0, 30],
    'skills': [
        CLIMB,
        [FIGHTING_SKILLS, THROW],
        NATURAL_WORLD,
        LISTEN,
        OCCULT,
        SPOT_HIDDEN,
        SWIM,
        SURVIVAL
    ]
  },

  ZEALOT = {
    'name': 'Zealot',
    'occupation_points': [['edu', 2], ['pow', 'app', 2]],
    'credit_rating': [0, 15],
    'skills': [
        HISTORY,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        STEALTH,
        OTHER,
        OTHER,
        OTHER
    ]
  }
]

localStorage.setItem(ACCOUNTING, 5)
localStorage.setItem(ACTING, 5)
localStorage.setItem(ANIMAL_HANDLING, 5)
localStorage.setItem(ANTHROPOLOGY, 1)
localStorage.setItem(APPRAISE, 5)
localStorage.setItem(ART_CRAFT, 5)
localStorage.setItem(ARTILLERY, 1)
localStorage.setItem(ASTRONOMY, 1)
localStorage.setItem(AXE, 15)
localStorage.setItem(BIOLOGY, 1)
localStorage.setItem(BOTANY, 1)
localStorage.setItem(BOW, 15)
localStorage.setItem(BRAWL, 25)
localStorage.setItem(CHAINSAW, 10)
localStorage.setItem(CHARM, 15)
localStorage.setItem(CHEMISTRY, 1)
localStorage.setItem(CLIMB, 20)
localStorage.setItem(COMPUTER_USE, 5)
localStorage.setItem(CREDIT_RATING, 0)
localStorage.setItem(CRYPTOGRAPHY, 1)
localStorage.setItem(CTHULHU_MYTHOS, 0)
localStorage.setItem(DEMOLITIONS, 1)
localStorage.setItem(DISGUISE, 5)
localStorage.setItem(DODGE, localStorage.getItem('dex') / 2)
localStorage.setItem(DIVING, 1)
localStorage.setItem(DRIVE_AUTO, 20)
localStorage.setItem(ELECTRICAL_REPAIR, 1)
localStorage.setItem(ELECTRONICS, 1)
localStorage.setItem(ENGINEERING, 1)
localStorage.setItem(FARMING, 5)
localStorage.setItem(FAST_TALK, 5)
localStorage.setItem(FIGHTING, 15)
localStorage.setItem(FIRST_AID, 30)
localStorage.setItem(FLAIL, 10)
localStorage.setItem(FLAMETHROWER, 10)
localStorage.setItem(FORENSICS, 1)
localStorage.setItem(FORGERY, 5)
localStorage.setItem(GARROTE, 15)
localStorage.setItem(GEOLOGY, 1)
localStorage.setItem(HANDGUN, 20)
localStorage.setItem(HEAVY_WEAPONS, 10)
localStorage.setItem(HEBREW, 1)
localStorage.setItem(HISTORY, 5)
localStorage.setItem(HYPNOSIS, 1)
localStorage.setItem(INSTRUMENT, 5)
localStorage.setItem(INTIMIDATE, 15)
localStorage.setItem(JUMP, 20)
localStorage.setItem(LANGUAGE_OTHER, 1)
localStorage.setItem(LANGUAGE_OWN, localStorage.getItem('edu'))
localStorage.setItem(LATIN, 1)
localStorage.setItem(LAW, 5)
localStorage.setItem(LIBRARY_USE, 20)
localStorage.setItem(LISTEN, 20)
localStorage.setItem(LITERATURE, 5)
localStorage.setItem(LOCKSMITH, 1)
localStorage.setItem(LORE, 1)
localStorage.setItem(MACHINE_GUN, 10)
localStorage.setItem(MATHEMATICS, 10)
localStorage.setItem(MECHANICAL_REPAIR, 10)
localStorage.setItem(MEDICINE, 1)
localStorage.setItem(METEOROLOGY, 1)
localStorage.setItem(NATURAL_WORLD, 10)
localStorage.setItem(NAVIGATION, 10)
localStorage.setItem(NON_OWN_LANGUAGE, 1)
localStorage.setItem(OCCULT, 5)
localStorage.setItem(OPERATE_HEAVY_MACHINERY, 1)
localStorage.setItem(PERSUADE, 10)
localStorage.setItem(PHARMACY, 1)
localStorage.setItem(PHOTOGRAPHY, 5)
localStorage.setItem(PHYSICS, 1)
localStorage.setItem(PILOT, 1)
localStorage.setItem(PILOT_AIRCRAFT, 1)
localStorage.setItem(PILOT_BOAT, 1)
localStorage.setItem(PSYCHOANALYSIS, 1)
localStorage.setItem(PSYCHOLOGY, 10)
localStorage.setItem(READ_LIPS, 1)
localStorage.setItem(RIDE, 5)
localStorage.setItem(RIFLE, 25)
localStorage.setItem(SCIENCE, 1)
localStorage.setItem(SHOTGUN, 25)
localStorage.setItem(SLEIGHT_OF_HAND, 10)
localStorage.setItem(SPEAR, 20)
localStorage.setItem(SPOT_HIDDEN, 25)
localStorage.setItem(STEALTH, 20)
localStorage.setItem(SUBMACHINE_GUN, 15)
localStorage.setItem(SURVIVAL, 10)
localStorage.setItem(SWORD, 20)
localStorage.setItem(SWIM, 20)
localStorage.setItem(TECHNICAL_DRAWING, 5)
localStorage.setItem(THROW, 20)
localStorage.setItem(TRACK, 20)
localStorage.setItem(WHIP, 5)
localStorage.setItem(ZOOLOGY, 1)


// Initialize Secondary Character

const maxhpValue = Math.floor((parseInt(localStorage.getItem('con')) + parseInt(localStorage.getItem('siz'))) / 10);
const maxmpValue = Math.floor(localStorage.getItem('pow') / 5);
const maxsanValue = 99 - localStorage.getItem(CTHULHU_MYTHOS);
const sanValue = localStorage.getItem('pow');
var moveValue;
if (localStorage.getItem('dex') < localStorage.getItem('siz') && localStorage.getItem('str') < localStorage.getItem('siz')) {
  moveValue = 7
} else if (
  (localStorage.getItem('dex') > localStorage.getItem('siz')) && (localStorage.getItem('siz') > localStorage.getItem('str'))
  || (localStorage.getItem('str') > localStorage.getItem('siz')) && (localStorage.getItem('siz') > localStorage.getItem('dex'))
  || (localStorage.getItem('dex') == localStorage.getItem('siz')) && (localStorage.getItem('siz') == localStorage.getItem('str'))
) {
  moveValue = 8
} else {
  moveValue = 9
}
if (localStorage.getItem('age') > 80) {
  moveValue -= 5
} else if (localStorage.getItem('age') > 70) {
  moveValue -= 4
} else if (localStorage.getItem('age') > 60) {
  moveValue -= 3
} else if (localStorage.getItem('age') > 50) {
  moveValue -= 2
} else if (localStorage.getItem('age') > 40) {
  moveValue -= 1
}
var buildValue;
var damageBonusValue;
var checker = parseInt(localStorage.getItem('str')) + parseInt(localStorage.getItem('con'))
if (checker >= 2 && checker <= 64) {
  buildValue = -2
  damageBonusValue = -2
} else if (checker >= 65 && checker <= 84) {
  buildValue = -1
  damageBonusValue = -1
} else if (checker >= 85 && checker <= 124) {
  buildValue = 0
  damageBonusValue = 0
} else if (checker >= 125 && checker <= 164) {
  buildValue = 1
  damageBonusValue = d4()
} else if (checker >= 165 && checker <= 204) {
  buildValue = 2
  damageBonusValue = d6()
} else {
  var overflow = Math.ceil((checker - 204) / 80)
  buildValue = 2 + overflow
  damageBonusValue = d6()
  for (let i = 0; i < overflow; i++) {
    damageBonusValue += d6()
  }
}

localStorage.setItem('maxhp', maxhpValue)
localStorage.setItem('maxmp', maxmpValue)
localStorage.setItem('maxsan', maxsanValue)
localStorage.setItem('currentsan', sanValue)
localStorage.setItem('move', moveValue)
localStorage.setItem('build', buildValue)
localStorage.setItem('damageBonus', damageBonusValue)

// Occupation Details
var credit = document.querySelectorAll('.credit')
var oName = document.querySelector('.o-name')
var attribute = document.querySelector('.char')
var occupationDropdown = document.getElementById('occupation')
var occupationName = ANTIQUARIAN['name'];
var occupationCredit = [30, 70];
var occupationSkills = ANTIQUARIAN['skills'];
var occupationPoints = [['edu', 4], ];
var occupation = ANTIQUARIAN

occupationDropdown.addEventListener('change', event => {
  OCCUPATION_LIST.forEach(element => {
    occupation = element
    if (element['name'] == occupationDropdown.value) {
      occupationName = element['name']
      occupationCredit = element['credit_rating']
      occupationSkills = element['skills']
      if (element['occupation_points'].length == 1) {
        occupationPoints = 'EDU'
      } else {
        var c1 = localStorage.getItem(element['occupation_points'][1][0])
        var c2 = localStorage.getItem(element['occupation_points'][1][1])
        if (parseInt(c1) > parseInt(c2)) {
          occupationPoints = ['EDU', element['occupation_points'][1][0].toUpperCase()]
        } else {
          occupationPoints = ['EDU', element['occupation_points'][1][1].toUpperCase()]
        }
      }
    }
  });
  oName.innerHTML = occupationName
  credit[0].innerHTML = occupationCredit[0]
  credit[1].innerHTML = occupationCredit[1]
  if (typeof(occupationPoints) == typeof('EDU')) {
     attribute.innerHTML = `${occupationPoints}`
  } else {
    attribute.innerHTML = `${occupationPoints[0]} and ${occupationPoints[1]}`
  }
  if (typeof(occupationSkills[0]) == typeof(ACCOUNTING)) {
    document.getElementById('skill1').innerHTML = occupationSkills[0]
  } else {
    for (let index = 0; index < occupationSkills[0].length; index++) {
      if (typeof(occupationSkills[0][index]) != typeof(ACCOUNTING)) {
        occupationSkills[0][index] = occupationSkills[0][index].join(', ')
      }
    }
    document.getElementById('skill1').innerHTML = occupationSkills[0].join(', ')
  }
  if (typeof(occupationSkills[1]) == typeof(ACCOUNTING)) {
    document.getElementById('skill2').innerHTML = occupationSkills[1]
  } else {
    for (let index = 0; index < occupationSkills[1].length; index++) {
      if (typeof(occupationSkills[1][index]) != typeof(ACCOUNTING)) {
        occupationSkills[1][index] = occupationSkills[1][index].join(', ')
      }
    }
    document.getElementById('skill2').innerHTML = occupationSkills[1].join(', ')
  }
  if (typeof(occupationSkills[2]) == typeof(ACCOUNTING)) {
    document.getElementById('skill3').innerHTML = occupationSkills[2]
  } else {
    for (let index = 0; index < occupationSkills[2].length; index++) {
      if (typeof(occupationSkills[2][index]) != typeof(ACCOUNTING)) {
        occupationSkills[2][index] = occupationSkills[2][index].join(', ')
      }
    }
    document.getElementById('skill3').innerHTML = occupationSkills[2].join(', ')
  }
  if (typeof(occupationSkills[3]) == typeof(ACCOUNTING)) {
    document.getElementById('skill4').innerHTML = occupationSkills[3]
  } else {
    for (let index = 0; index < occupationSkills[3].length; index++) {
      if (typeof(occupationSkills[3][index]) != typeof(ACCOUNTING)) {
        occupationSkills[3][index] = occupationSkills[3][index].join(', ')
      }
    }
    document.getElementById('skill4').innerHTML = occupationSkills[3].join(', ')
  }
  if (typeof(occupationSkills[4]) == typeof(ACCOUNTING)) {
    document.getElementById('skill5').innerHTML = occupationSkills[4]
  } else {
    for (let index = 0; index < occupationSkills[4].length; index++) {
      if (typeof(occupationSkills[4][index]) != typeof(ACCOUNTING)) {
        occupationSkills[4][index] = occupationSkills[4][index].join(', ')
      }
    }
    document.getElementById('skill5').innerHTML = occupationSkills[4].join(', ')
  }
  if (typeof(occupationSkills[5]) == typeof(ACCOUNTING)) {
    document.getElementById('skill6').innerHTML = occupationSkills[5]
  } else {
    for (let index = 0; index < occupationSkills[5].length; index++) {
      if (typeof(occupationSkills[5][index]) != typeof(ACCOUNTING)) {
        occupationSkills[5][index] = occupationSkills[5][index].join(', ')
      }
    }
    document.getElementById('skill6').innerHTML = occupationSkills[5].join(', ')
  }
  if (typeof(occupationSkills[6]) == typeof(ACCOUNTING)) {
    document.getElementById('skill7').innerHTML = occupationSkills[6]
  } else {
    for (let index = 0; index < occupationSkills[6].length; index++) {
      if (typeof(occupationSkills[6][index]) != typeof(ACCOUNTING)) {
        occupationSkills[6][index] = occupationSkills[6][index].join(', ')
      }
    }
    document.getElementById('skill7').innerHTML = occupationSkills[6].join(', ')
  }
  if (typeof(occupationSkills[7]) == typeof(ACCOUNTING)) {
    document.getElementById('skill8').innerHTML = occupationSkills[7]
  } else {
    for (let index = 0; index < occupationSkills[7].length; index++) {
      if (typeof(occupationSkills[7][index]) != typeof(ACCOUNTING)) {
        occupationSkills[7][index] = occupationSkills[7][index].join(', ')
      }
    }
    document.getElementById('skill8').innerHTML = occupationSkills[7].join(', ')
  }
})


// Next page
const nextStep = document.querySelector('.button6')
nextStep.addEventListener('click', event => {
  localStorage.setItem('occupation', occupation)
  location.href = 'building_character_4.html'
})

// Occupation detail
const occupationDetaiils = document.querySelector('.button5')
occupationDetaiils.addEventListener('click', event => {
  location.href = 'occupation_list.html'
})
