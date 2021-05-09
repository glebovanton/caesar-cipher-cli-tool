const parseArgs = require('minimist');

const transformData = require('./tansformator.js');
const checkArgv = require('./validator');
const { FullOptionEnum, ShotOptionEnum } = require('./variables');

const argv = parseArgs(process.argv.slice(2));

// Make sure we got a filename on the command line.
const inputFileName = argv[FullOptionEnum.INPUT] || argv[ShotOptionEnum.INPUT];
const outputFileName = argv[FullOptionEnum.OUTPUT] || argv[ShotOptionEnum.OUTPUT];
let shift = argv[FullOptionEnum.SHIFT] || argv[ShotOptionEnum.SHIFT];
const action = argv[FullOptionEnum.ACTION] || argv[ShotOptionEnum.ACTION];

function checkNegativeShiftArg() {
  if (typeof shift === 'boolean') {
    const shiftArgv = [`-${ShotOptionEnum.SHIFT}`, `--${FullOptionEnum.SHIFT}`];
    const shiftKeyIndex = process.argv.findIndex((arg) => shiftArgv.includes(arg));
    const shiftValueIndex = shiftKeyIndex + 1;
    shift = Number.parseInt(process.argv[shiftValueIndex], 10);
  }
}

checkNegativeShiftArg();
checkArgv(action, shift);
transformData(inputFileName, outputFileName, action, shift);
