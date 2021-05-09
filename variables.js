const ActionEnum = Object.freeze({
  ENCODE: 'encode',
  DECODE: 'decode',
});
const FullOptionEnum = Object.freeze({
  SHIFT: 'shift',
  INPUT: 'input',
  OUTPUT: 'output',
  ACTION: 'action',
});

const ShotOptionEnum = Object.freeze({
  SHIFT: 's',
  INPUT: 'i',
  OUTPUT: 'o',
  ACTION: 'a',
});

module.exports = { ActionEnum, FullOptionEnum, ShotOptionEnum };
