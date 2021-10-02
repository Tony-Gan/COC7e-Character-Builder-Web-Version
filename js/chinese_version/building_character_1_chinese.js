const getDescription = document.querySelector('.button1')

var cName;
var gender;
var age;

getDescription.addEventListener('click', event => {
  const descriptionText = document.querySelector('main p')
  cName = document.getElementById('name').value;
  if (!cName) {
    descriptionText.innerHTML = '你必须拥有一个名字...'
    descriptionText.style.visibility = 'visible'
    return
  };

  const male = document.getElementById('male').checked;
  const female = document.getElementById('female').checked
  const unisex = document.getElementById('unisex').checked
  if (!male && !female && !unisex) {
    descriptionText.innerHTML = '你需要指定你的性别...'
    descriptionText.style.visibility = 'visible'
    return
  } else if (male) {
    gender = '男性'
  } else if (female){
    gender = '女性'
  } else {
    gender = '中性'
  }

  age = document.getElementById('age').value
  descriptionText.innerHTML = `${cName}，你是一个${age}岁的${gender}，确认请点击下一步`
  descriptionText.style.visibility = 'visible'
})


const nextStep = document.querySelector('.button2')

nextStep.addEventListener('click', event => {
  if (!cName || !age || !gender) {
    document.querySelector('main p').innerHTML = '在进行下一步之前，请先点击“应用”按钮应用当前的选项'
    document.querySelector('main p').style.visibility = 'visible'
    return
  }
  localStorage.setItem('name', cName)
  localStorage.setItem('age', parseInt(age))
  localStorage.setItem('gender', gender)
  location.href = 'building_character_2_chinese.html'
})