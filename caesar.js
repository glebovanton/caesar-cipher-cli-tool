const alphabetLettersAmount = 26;

function caesarShift(str, amount = 1) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + alphabetLettersAmount);
  }

  // Make an output variable
  let output = '';

  // Go through each character
  for (let i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    let c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      const code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % alphabetLettersAmount) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % alphabetLettersAmount) + 97);
      }
    }

    // Append
    output += c;
  }

  return output;
}

module.exports = caesarShift;
