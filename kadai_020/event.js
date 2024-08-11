const pushbtn = document.getElementById('btn');
const pushtext = document.getElementById('text');

pushbtn.addEventListener('click', () => {
  pushtext.innerHTML = '<h2>ボタンをクリックしました</h2>';
})