console.clear();
let mul = {
  uptotable: 0,
  rand1: 0,
  rand2: 0,
  result: 0,
};
let hightable = document.querySelector('#item-input');
let strtbtn = document.querySelector('#btnStart');
let firstnumber = document.getElementById('firstnumber');
let secondnumber = document.getElementById('secondnumber');
let resultbtn = document.querySelector('#btnResult');
let result = document.querySelector('#item-result');
let multi = document.querySelector('#multiply');

function randomNumber() {
  multi.style.display = 'block';
  mul.uptotable = hightable.value;
  mul.rand1 = Math.floor(Math.random() * (mul.uptotable - 1) + 2);
  mul.rand2 = Math.floor(Math.random() * (mul.uptotable - 1) + 2);
  setMulti();
}

function setMulti() {
  firstnumber.textContent = mul.rand1;
  secondnumber.textContent = mul.rand2;
}

function checkAnswer() {
  let res = mul.rand1 * mul.rand2;
  if (result.value == res) {
    playsound('s');
    randomNumber();
    result.value = '';
    result.focus();
  } else {
    playsound('f');
  }
}

function playsound(folder) {
  let sound = Math.floor(Math.random() * 6 + 1);

  let audio = document.createElement('audio');
  audio.src = `/sounds/${folder}/${sound}.mp3`;
  audio.addEventListener('load', () => {
    console.log(audio.duration);
  });
  audio.play();
  setTimeout(() => {
    return;
  }, 2000);
}

strtbtn.addEventListener('click', randomNumber);
resultbtn.addEventListener('click', checkAnswer);
