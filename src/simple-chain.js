const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) { this.chain.push(' ');}
      else{ this.chain.push(`${value}`);};
      return this;
  },

  removeLink(position) {
    if (position > 0 && position < this.chain.length && typeof position === 'number' &&
    parseInt(position) === position){this.chain.splice(position - 1, 1);}
    else{ this.chain = [];
          throw new Error();
        }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finish;
    finish = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return finish;
  }
};

module.exports = chainMaker;
