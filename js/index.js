localStorage.clear();

const button1 = document.getElementById('function2');
const button2 = document.getElementById('function3');
button1.addEventListener('click', event => {
  alert('Unavailable now.')
});
button2.addEventListener('click', event => {
  alert('Unavailable now.')
});

const languageButton = document.getElementById('language-setting')
languageButton.addEventListener('click', event => {
  alert('没来得及做呢，要不你帮我翻译。')
})