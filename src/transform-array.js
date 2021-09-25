import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

export default function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (isControlSequence(newArr[i]))
      newArr = applyControlSequence(newArr[i], i, newArr);
  }
  return newArr.filter((item) => item);
}

function isControlSequence(arrElem) {
  return /^--/.test(arrElem);
}

function applyControlSequence(sequence, arrIndex, newArr) {
  switch (sequence) {
    case '--discard-next':
      if (arrIndex === newArr.length - 1) newArr = newArr.slice(0, arrIndex);
      else
        newArr = [
          ...newArr.slice(0, arrIndex),
          undefined,
          ...newArr.slice(arrIndex + 2),
        ];
      break;
    case '--discard-prev':
      if (arrIndex === 0) newArr = newArr.slice(1);
      else
        newArr = [
          ...newArr.slice(0, arrIndex - 1),
          undefined,
          ...newArr.slice(arrIndex + 1),
        ];
      break;
    case '--double-next':
      if (arrIndex === newArr.length - 1) newArr = newArr.slice(0, arrIndex);
      else
        newArr = [
          ...newArr.slice(0, arrIndex),
          newArr[arrIndex + 1],
          ...newArr.slice(arrIndex + 1),
        ];
      break;
    case '--double-prev':
      if (arrIndex === 0) newArr = newArr.slice(1);
      else
        newArr = [
          ...newArr.slice(0, arrIndex),
          newArr[arrIndex - 1],
          ...newArr.slice(arrIndex + 1),
        ];
      break;
    default:
      break;
  }
  return newArr;
}
