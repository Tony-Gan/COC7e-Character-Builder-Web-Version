const getDescription = document.querySelector('.button1')

var cName;
var gender;
var age;

getDescription.addEventListener('click', event => {
  const descriptionText = document.querySelector('main p')
  cName = document.getElementById('name').value;
  if (!cName) {
    descriptionText.innerHTML = 'You have to have a name...'
    descriptionText.style.visibility = 'visible'
    return
  };

  const male = document.getElementById('male').checked;
  const female = document.getElementById('female').checked
  if (!male && !female) {
    descriptionText.innerHTML = 'You need to specify your gender...'
    descriptionText.style.visibility = 'visible'
    return
  } else if (male) {
    gender = 'male'
  } else {
    gender = 'female'
  }

  age = document.getElementById('age').value
  var vowelModifier = 'a'
  if (age[0] == '1' || age[0] == '8') {
    vowelModifier = 'an'
  }
  descriptionText.innerHTML = `${cName}, you are ${vowelModifier} ${age} years old ${gender}. If you happy with this, click 'Next Step'`
  descriptionText.style.visibility = 'visible'
})


const nextStep = document.querySelector('.button2')

nextStep.addEventListener('click', event => {
  if (!cName || !age || !gender) {
    document.querySelector('main p').innerHTML = 'Click "Get Description" before going to the next step'
    document.querySelector('main p').style.visibility = 'visible'
    return
  }
  localStorage.setItem('name', cName)
  localStorage.setItem('age', parseInt(age))
  localStorage.setItem('gender', gender)
  location.href = 'building_character_2.html'
})