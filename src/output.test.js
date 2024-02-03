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
});
