import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  _alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  constructor() {
    this.isReverse = arguments[0] === false;
  }

  encrypt(message, key) {
    return this._work(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    return this._work(encryptedMessage, key, 'decrypt');
  }

  _work(m, k, mode) {
    if (
      m === undefined ||
      m !== String(m) ||
      k === undefined ||
      k !== String(k)
    )
      throw new Error('Incorrect arguments!');

    m = m.toUpperCase();
    k = k.toUpperCase();
    let result = '';
    let keywordIndex = 0;
    const n = this._alphabet.length;

    m.split('').forEach((char) => {
      if (!this._alphabet.includes(char)) {
        result += char;
        return;
      }

      let c;
      if (mode === 'encrypt')
        c =
          (this._alphabet.indexOf(char) +
            this._alphabet.indexOf(k[keywordIndex])) %
          n;
      else {
        c =
          (this._alphabet.indexOf(char) -
            this._alphabet.indexOf(k[keywordIndex])) %
          n;
      }

      result += [...this._alphabet].splice(c, 1);
      ++keywordIndex;
      if (keywordIndex === k.length) keywordIndex = 0;
    });

    if (this.isReverse) return result.split('').reverse().join('');
    return result;
  }
}
