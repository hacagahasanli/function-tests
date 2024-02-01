import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should transform a string number to a number of type number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBe(1).toBeTypeOf('number');
});

it('should transform a string number to a number of type number', () => {
    const input = '1';
  
    const result = transformToNumber(input);
  
    expect(result).toBe(+input);
  });

it('should yield NaN for non-transformable values', () => {
  const input1 = 'invalid';
  const input2 = {};

  const result1 = transformToNumber(input1);
  const result2 = transformToNumber(input2) 

  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
});
