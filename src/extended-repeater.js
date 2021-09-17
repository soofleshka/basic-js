import { NotImplementedError } from '../extensions/index.js';

const initialOptions = {
  repeatTimes: 1,
  separator: '+',
  addition: '',
  additionRepeatTimes: 1,
  additionSeparator: '|',
};
/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  options = { ...initialOptions, ...options };

  let additionString = '';
  if (String(options.addition))
    additionString = repeater(options.addition, {
      repeatTimes: options.additionRepeatTimes,
      separator: options.additionSeparator,
    });

  let tArr = [];
  for (let i = 1; i <= options.repeatTimes; i++) {
    tArr.push(str + additionString);
  }
  let result = '';
  result = tArr.join(options.separator);

  return result;
}
