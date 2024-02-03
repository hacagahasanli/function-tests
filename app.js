import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form)

  const result = calculateResult(numberValues);
  

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
