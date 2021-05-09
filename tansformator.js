const fs = require('fs');
const stream = require('stream');

const caesar = require('./caesar');
const { ActionEnum } = require('./variables');

const coder = new stream.Transform({ objectMode: true });

function getSwiftWithDirection(action, shift) {
  const isPositiveInputShift = shift >= 0;
  const isPositiveFinalShift = (isPositiveInputShift && action === ActionEnum.ENCODE)
      || (!isPositiveInputShift && action === ActionEnum.ENCODE);

  return isPositiveFinalShift ? shift : -shift;
}

function transformData(inputFile, outputFile, action, shift) {
  let source;
  const swiftWithDirection = getSwiftWithDirection(action, shift);
  // eslint-disable-next-line no-underscore-dangle
  coder._transform = function (chunk, encoding, done) {
    try {
      done(null, caesar(chunk.toString(), swiftWithDirection));
    } catch (e) {
      done(e);
    }
  };

  if (inputFile) {
    source = fs.createReadStream(inputFile);
  } else {
    source = process.stdin;
  }
  let target;
  if (outputFile) {
    target = fs.createWriteStream(outputFile, { flags: 'a' });
  } else {
    target = process.stdout;
  }
  stream.pipeline(source, coder, target, (err) => {
    if (err) {
      process.stderr.write(`${err.message}\n`);
      process.exit(1);
    }
  });
}

module.exports = transformData;
