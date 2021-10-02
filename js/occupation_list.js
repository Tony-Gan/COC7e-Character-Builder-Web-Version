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
    'chinese_name': '古董收藏家',
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
    'chinese_name': '艺术家',
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
    'chinese_name': '运动员',
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
    'chinese_name': '作家',
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
    'chinese_name': '神职人员',
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
    'chinese_name': '罪犯',
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
    'chinese_name': '业余艺术爱好者',
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
    'chinese_name': '医生',
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
    'chinese_name': '流浪汉',
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
    'chinese_name': '工程师',
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
    'chinese_name': '艺人',
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
    'chinese_name': '农民',
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
    'chinese_name': '黑客',
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
    'chinese_name': '记者',
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
    'chinese_name': '律师',
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
    'chinese_name': '图书馆管理员',
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
    'chinese_name': '军官',
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
    'chinese_name': '传教士',
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
    'chinese_name': '音乐家',
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
    'chinese_name': '超心理学家',
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
    'chinese_name': '飞行员',
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
    'chinese_name': '警探',
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
    'chinese_name': '警察',
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
    'chinese_name': '私家侦探',
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
    'chinese_name': '教授',
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
    'chinese_name': '士兵',
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
    'chinese_name': '部落成员',
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
    'chinese_name': '狂热者',
    'occupation_points': [['edu', 2], ['pow', 'app', 2]],
    'credit_rating': [0, 15],
    'skills': [
        HISTORY,
        INTERPERSONAL_SKILLS,
        INTERPERSONAL_SKILLS,
        PSYCHOLOGY,
        STEALTH,
        OTHER,
        OTHER,
        OTHER
    ]
  }
]

const table = document.getElementById('occupation-list')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

table.appendChild(thead)
table.appendChild(tbody)

const headings = [
  'Occupation',
  'Credit',
  'Points',
  'Skill1',
  'Skill2',
  'Skill3',
  'Skill4',
  'Skill5',
  'Skill6',
  'Skill7',
  'Skill8'
]

var headingLine = document.createElement('tr')
headings.forEach(element => {
  const heading = document.createElement('th')
  heading.innerHTML = element
  headingLine.appendChild(heading)
});
thead.appendChild(headingLine)

const createSkill = (skill) => {
  if (typeof(skill) == typeof(ACCOUNTING)) {
    return [skill,]
  } else {
    skillStr = []
    skill.forEach(element => {
      if (typeof(element) == typeof(ACCOUNTING)) {
        skillStr.push(element)
      } else {
        element.forEach(i => {
          skillStr.push(i)
        })
      }
    })
    return skillStr
  }
}

OCCUPATION_LIST.forEach(occupation => {
  var row = document.createElement('tr')

  const name = document.createElement('td')
  name.innerHTML = occupation['name']
  row.appendChild(name)

  const credit = document.createElement('td')
  credit.innerHTML = `${occupation['credit_rating'][0]} to ${occupation['credit_rating'][1]}`
  row.appendChild(credit)

  const points = document.createElement('td')
  if (occupation['occupation_points'].length == 1) {
    points.innerHTML = 'EDU'
  } else {
    if (occupation['occupation_points'][1].length == 2) {
      points.innerHTML = `EDU | ${occupation['occupation_points'][1][0].toUpperCase()}`
    } else {
      points.innerHTML = `EDU | ${occupation['occupation_points'][1][0].toUpperCase()} or ${occupation['occupation_points'][1][1].toUpperCase()}`
    }
  }
  row.appendChild(points)

  const skill1 = document.createElement('td')
  skill1.innerHTML = createSkill(occupation['skills'][0]).join(', ')
  row.appendChild(skill1)

  const skill2 = document.createElement('td')
  skill2.innerHTML = createSkill(occupation['skills'][1]).join(', ')
  row.appendChild(skill2)

  const skill3 = document.createElement('td')
  skill3.innerHTML = createSkill(occupation['skills'][2]).join(', ')
  row.appendChild(skill3)

  const skill4 = document.createElement('td')
  skill4.innerHTML = createSkill(occupation['skills'][3]).join(', ')
  row.appendChild(skill4)

  const skill5 = document.createElement('td')
  skill5.innerHTML = createSkill(occupation['skills'][4]).join(', ')
  row.appendChild(skill5)

  const skill6 = document.createElement('td')
  skill6.innerHTML = createSkill(occupation['skills'][5]).join(', ')
  row.appendChild(skill6)

  const skill7 = document.createElement('td')
  skill7.innerHTML = createSkill(occupation['skills'][6]).join(', ')
  row.appendChild(skill7)

  const skill8 = document.createElement('td')
  skill8.innerHTML = createSkill(occupation['skills'][7]).join(', ')
  row.appendChild(skill8)

  tbody.appendChild(row)
})

var column1Head = document.querySelectorAll('thead tr th:nth-child(1)')
var column1Content = document.querySelectorAll('tbody tr td:nth-child(1)')
column1Head.forEach(cell => {
  cell.style.width = '130px'
})
column1Content.forEach(cell => {
  cell.style.width = '130px'
  cell.style.fontFamily = 'Merriweather'
  cell.style.fontWeight = 700
})

var column2Head = document.querySelectorAll('thead tr th:nth-child(2)')
var column2Content = document.querySelectorAll('tbody tr td:nth-child(2)')
column2Head.forEach(cell => {
  cell.style.width = '60px'
})
column2Content.forEach(cell => {
  cell.style.width = '60px'
})

var column3Head = document.querySelectorAll('thead tr th:nth-child(3)')
var column3Content = document.querySelectorAll('tbody tr td:nth-child(3)')
column3Head.forEach(cell => {
  cell.style.width = '120px'
})
column3Content.forEach(cell => {
  cell.style.width = '120px'
})

const goBack = document.querySelector('body')
goBack.addEventListener('click', event => {
  location.href = 'building_character_3.html'
})