const d6 = () => {
  return Math.floor(Math.random() * 6) + 1
}

const d4 = () => {
 return Math.floor(Math.random() * 4) + 1
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

const ACCOUNTING = '会计'
const ANIMAL_HANDLING = '动物驯养'
const ANTHROPOLOGY = '人类学'
const APPRAISE = '估价'
const ART_CRAFT = '艺术与手艺'
const ARTILLERY = '炮术'
const CHARM = '魅惑'
const CLIMB = '攀爬'
const COMPUTER_USE = '计算机使用'
const CREDIT_RATING = '信誉'
const CTHULHU_MYTHOS = '克苏鲁神话'
const DEMOLITIONS = '爆破'
const DISGUISE = '乔装'
const DIVING = '潜水'
const DODGE = '闪避'
const DRIVE_AUTO = '汽车驾驶'
const ELECTRICAL_REPAIR = '电气维修'
const ELECTRONICS = '电子学'
const FAST_TALK = '话术'
const FIGHTING = '格斗'
const FIREARMS = '射击'
const FIRST_AID = '急救'
const HISTORY = '历史'
const HYPNOSIS = '催眠'
const INTIMIDATE = '恐吓'
const JUMP = '跳跃'
const LANGUAGE_OTHER = '外语'
const LANGUAGE_OWN = '母语'
const LAW = '法律'
const LIBRARY_USE = '图书馆使用'
const LISTEN = '聆听'
const LOCKSMITH = '锁匠'
const LORE = '灵感'
const MECHANICAL_REPAIR = '机械维修'
const MEDICINE = '医学'
const NATURAL_WORLD = '博物学'
const NAVIGATION = '领航'
const OCCULT = '神秘学'
const OPERATE_HEAVY_MACHINERY = '操作重型机械'
const PERSUADE = '说服'
const PILOT = '驾驶'
const PSYCHOANALYSIS = '精神分析'
const PSYCHOLOGY = '心理学'
const READ_LIPS = '读唇'
const RIDE = '骑术'
const SCIENCE = '科学'
const SLEIGHT_OF_HAND = '妙手'
const SPOT_HIDDEN = '侦察'
const STEALTH = '潜行'
const SURVIVAL = '生存'
const SWIM = '游泳'
const THROW = '投掷'
const TRACK = '追踪'
const ACTING = '表演'
const ASTRONOMY = '天文学'
const AXE = '斧'
const BIOLOGY = '生物学'
const BOTANY = '植物学'
const BOW = '弓'
const BRAWL = '斗殴'
const CHAINSAW = '链锯'
const CHEMISTRY = '化学'
const CRYPTOGRAPHY = '密码学'
const ENGINEERING = '工程学'
const FINE_ART = '美术'
const FLAIL = '连枷'
const FLAMETHROWER = '火焰喷射器'
const FORENSICS = '法医学'
const FORGERY = '锻造'
const GARROTE = '绞'
const GEOLOGY = '地质学'
const HANDGUN = '手枪'
const HEAVY_WEAPONS = '重武器'
const MACHINE_GUN = '自动步枪'
const MATHEMATICS = '数学'
const METEOROLOGY = '气象学'
const PHARMACY = '药学'
const PHOTOGRAPHY = '摄影'
const PHYSICS = '物理学'
const RIFLE = '步枪'
const SHOTGUN = '霰弹枪'
const SPEAR = '矛'
const SUBMACHINE_GUN = '半自动步枪'
const SWORD = '剑'
const WHIP = '鞭'
const ZOOLOGY = '动物学'
const LITERATURE = '文学'
const LATIN = '拉丁语'
const HEBREW = '希伯来语'
const NON_OWN_LANGUAGE = '其他外语'
const FARMING = '农学'
const TECHNICAL_DRAWING = '机械制图'
const INSTRUMENT = '乐器'
const PILOT_AIRCRAFT = '飞行器驾驶'
const PILOT_BOAT = '船驾驶'
const OTHER = '其他任意技能'

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
var occupationName = ANTIQUARIAN['chinese_name'];
var occupationCredit = [30, 70];
var occupationSkills = ANTIQUARIAN['skills'];
var occupationPoints = [['edu', 4], ];
var occupation = ANTIQUARIAN

occupationDropdown.addEventListener('change', event => {
  OCCUPATION_LIST.forEach(element => {
    occupation = element
    if (element['chinese_name'] == occupationDropdown.value) {
      occupationName = element['chinese_name']
      occupationCredit = element['credit_rating']
      occupationSkills = element['skills']
      if (element['occupation_points'].length == 1) {
        occupationPoints = 'EDU'
      } else {
        if (element['occupation_points'][1].length == 2) {
          occupationPoints = ['EDU', element['occupation_points'][1][0].toUpperCase()]
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
        occupationSkills[0][index] = occupationSkills[0][index].join('，')
      }
    }
    document.getElementById('skill1').innerHTML = occupationSkills[0].join('，')
  }
  if (typeof(occupationSkills[1]) == typeof(ACCOUNTING)) {
    document.getElementById('skill2').innerHTML = occupationSkills[1]
  } else {
    for (let index = 0; index < occupationSkills[1].length; index++) {
      if (typeof(occupationSkills[1][index]) != typeof(ACCOUNTING)) {
        occupationSkills[1][index] = occupationSkills[1][index].join('，')
      }
    }
    document.getElementById('skill2').innerHTML = occupationSkills[1].join('，')
  }
  if (typeof(occupationSkills[2]) == typeof(ACCOUNTING)) {
    document.getElementById('skill3').innerHTML = occupationSkills[2]
  } else {
    for (let index = 0; index < occupationSkills[2].length; index++) {
      if (typeof(occupationSkills[2][index]) != typeof(ACCOUNTING)) {
        occupationSkills[2][index] = occupationSkills[2][index].join('，')
      }
    }
    document.getElementById('skill3').innerHTML = occupationSkills[2].join('，')
  }
  if (typeof(occupationSkills[3]) == typeof(ACCOUNTING)) {
    document.getElementById('skill4').innerHTML = occupationSkills[3]
  } else {
    for (let index = 0; index < occupationSkills[3].length; index++) {
      if (typeof(occupationSkills[3][index]) != typeof(ACCOUNTING)) {
        occupationSkills[3][index] = occupationSkills[3][index].join('，')
      }
    }
    document.getElementById('skill4').innerHTML = occupationSkills[3].join('，')
  }
  if (typeof(occupationSkills[4]) == typeof(ACCOUNTING)) {
    document.getElementById('skill5').innerHTML = occupationSkills[4]
  } else {
    for (let index = 0; index < occupationSkills[4].length; index++) {
      if (typeof(occupationSkills[4][index]) != typeof(ACCOUNTING)) {
        occupationSkills[4][index] = occupationSkills[4][index].join('，')
      }
    }
    document.getElementById('skill5').innerHTML = occupationSkills[4].join('，')
  }
  if (typeof(occupationSkills[5]) == typeof(ACCOUNTING)) {
    document.getElementById('skill6').innerHTML = occupationSkills[5]
  } else {
    for (let index = 0; index < occupationSkills[5].length; index++) {
      if (typeof(occupationSkills[5][index]) != typeof(ACCOUNTING)) {
        occupationSkills[5][index] = occupationSkills[5][index].join('，')
      }
    }
    document.getElementById('skill6').innerHTML = occupationSkills[5].join('，')
  }
  if (typeof(occupationSkills[6]) == typeof(ACCOUNTING)) {
    document.getElementById('skill7').innerHTML = occupationSkills[6]
  } else {
    for (let index = 0; index < occupationSkills[6].length; index++) {
      if (typeof(occupationSkills[6][index]) != typeof(ACCOUNTING)) {
        occupationSkills[6][index] = occupationSkills[6][index].join('，')
      }
    }
    document.getElementById('skill7').innerHTML = occupationSkills[6].join('，')
  }
  if (typeof(occupationSkills[7]) == typeof(ACCOUNTING)) {
    document.getElementById('skill8').innerHTML = occupationSkills[7]
  } else {
    for (let index = 0; index < occupationSkills[7].length; index++) {
      if (typeof(occupationSkills[7][index]) != typeof(ACCOUNTING)) {
        occupationSkills[7][index] = occupationSkills[7][index].join('，')
      }
    }
    document.getElementById('skill8').innerHTML = occupationSkills[7].join('，')
  }
})


// Next page
const nextStep = document.querySelector('.button6')
nextStep.addEventListener('click', event => {
  localStorage.setItem('occupation', occupation)
  location.href = 'building_character_4_chinese.html'
})

// Occupation detail
const occupationDetaiils = document.querySelector('.button5')
occupationDetaiils.addEventListener('click', event => {
  location.href = 'occupation_list_chinese.html'
})
