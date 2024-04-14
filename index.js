/*
console.log('hello world');
let second = 1;
document.querySelector('.start').addEventListener('click', () => {
  setInterval(() => {
    second = second + 1;
  },1000);
});
console.log(`${second}`);
*/
const mood = document.querySelector('.js-mood-button');
document.querySelector('.text-button').addEventListener('click', () => {
  const high = document.querySelector('.high');
  let higher = high.value;
document.querySelector('.outcome').innerHTML = `Hello ${higher}, how are you doing today?`;
});
const buttons = `<button class="js-yes">Don't know how to break up with my partner</button>
<button class="js-love">My partner doesn't love me anymore</button>
<button class="js-cheat">My partner cheated on me</button>`;

document.querySelector('.js-good-button').addEventListener('click', () => {
  mood.innerHTML = 'Well I am glad to hear that, so what seems to be the problem in your relationship?';
});
document.querySelector('.js-bad-button').addEventListener('click', () => {
  mood.innerHTML = 'I am so sorry to hear that, may I ask what happened?';
});
const down = `<a href="file:///C:/learning-html/My-projects/javascript-course/9d.html"><button class="yes">Down</button></a>`;

document.querySelector('.js-yes').addEventListener('click', () => {
  document.querySelector('.kanye').innerHTML = `If you want tips on how to let your partner down easy then click the "down" button on the right. ${down}`;
});
const fire = `<a href="file:///C:/learning-html/My-projects/javascript-course/9d.html"><button class="yes">Fire<button></a>`;
  document.querySelector('.js-love').addEventListener('click', () => {
    document.querySelector('.kanye').innerHTML = `If you want tips on how to bring back the fire in your relationship click the "fire" button on the right. ${fire}`;
  });
  const fix = `<button class="yes">Fix</button>`;
  document.querySelector('.js-cheat').addEventListener('click', () => {
    document.querySelector('.kanye').innerHTML = `If you want to fix your relationship click the "fix" button below ${fix}`;
  });
  const back = `<button class="yes">Back</button>`;
  document.querySelector('.js-cheated').addEventListener('click', () => {
    document.querySelector('.kanye').innerHTML = `If you want to find ways on how to get your partner back please click the "back" button below. ${back}`;
  });