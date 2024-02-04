import { describe, it, expect } from 'vitest';

import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return a string , no matter which value is passed in', () => {
    const value1 = 1;
    const value2 = 'invalid';
    const value3 = false;

    const result1 = generateResultText(value1)
    const result2 = generateResultText(value2)
    const result3 = generateResultText(value3)

    expect(result1).toBeTypeOf('string')
    expect(result2).toBeTypeOf('string')
    expect(result3).toBeTypeOf('string')
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
  });
});
