import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let newArr = Array.from(String(n));
  const numbers = [];
  newArr.forEach((_, index) => {
    numbers.push(Number(newArr.filter((_, i) => i !== index).join('')));
  });
  return Math.max(...numbers);
}
