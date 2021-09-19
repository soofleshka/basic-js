import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value = '') {
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    position -= 1;
    if (
      !Number.isInteger(position) ||
      ![...this.chains.keys()].some((item) => item === position)
    ) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    } else this.chains.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const result = this.chains.map((item) => `( ${item} )`).join('~~');
    this.chains = [];
    return result;
  },
};
