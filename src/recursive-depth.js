import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  maxDepth = 0;
  calculateDepth(arr, currDepth = 0) {
    ++currDepth;
    if (currDepth > this.maxDepth) this.maxDepth = currDepth;

    arr.forEach((elem) => {
      if (Array.isArray(elem)) this.calculateDepth(elem, currDepth);
    });

    if (currDepth === 1) {
      const result = this.maxDepth;
      this.maxDepth = 0;
      return result;
    }
  }
}
