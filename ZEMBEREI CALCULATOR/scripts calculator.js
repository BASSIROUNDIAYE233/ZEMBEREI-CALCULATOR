let display = document.getElementById('display');

function append(char) {
  display.value += char;
}
// scripts/calculator.js
function backspace() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Erreur';
  }
}

function clearDisplay() {
  display.value = '';
}