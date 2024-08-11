const pushbtn = document.getElementById('btn');
const pushtext = document.getElementById('text');

pushbtn.addEventListener('click', () => {
  pushtext.textContent = 'ボタンをクリックしました';
})