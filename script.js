const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const button = document.querySelector('button');
const body = document.getElementById('gradient');

css.textContent = `linear-gradient(to right, rgb(91, 250, 219), rgb(248, 97, 162));`;

// Allow User to Set Gradient
function setGradient() {
  body.style.background =
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// Generate a Random Color
function generateRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

// Generate a Random Gradient
function setRandomGradient() {
  color1.value = generateRandomColor();
  color2.value = generateRandomColor();
  return setGradient();
}

// Button of Random Color
button.addEventListener('click', setRandomGradient);
