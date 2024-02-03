export function generateResultText(calcualationResult) {
  let resultText = '';

  if (calcualationResult === 'invalid')
    resultText = 'Invalid input. You must enter valid numbers.';
  else if (calcualationResult !== 'no-calc')
    resultText = 'Result: ' + calcualationResult;

  return resultText;
}

export function outputResult(resultText) {
  const output = document.getElementById('result');
  output.textContent = resultText;
}
