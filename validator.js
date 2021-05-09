const { ActionEnum, FullOptionEnum, ShotOptionEnum } = require('./variables');

function errorHandler(err) {
  if (err) {
    process.stderr.write(`${err.message}\n`);
    process.exit(1);
  }
}

function checkArgv(action, shift) {
  function isAction() {
    return Object.values(ActionEnum).indexOf(action.trim().toLowerCase()) > -1;
  }
  function isShift() {
    return Number.isInteger(shift);
  }
  if (!isAction()) {
    errorHandler(new Error(`No following required valid argument: --${FullOptionEnum.ACTION} or -${ShotOptionEnum.ACTION}. Example: -a encode`));
  }
  if (!isShift()) {
    errorHandler(new Error(`No following required valid argument: --${FullOptionEnum.SHIFT} or -${ShotOptionEnum.SHIFT}. Example: '-s 1', or '-s=-1' with negative number`));
  }
}

module.exports = checkArgv;
