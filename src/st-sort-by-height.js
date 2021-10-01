import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] === -1) continue;
      let k = j;
      if (arr[j + 1] === -1) {
        while (j + 1 < arr.length - 1 && arr[j + 1] === -1) {
          ++j;
        }
        if (arr[j + 1] === -1) continue;
      }
      if (arr[k] > arr[j + 1]) {
        let temp = arr[k];
        arr[k] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
