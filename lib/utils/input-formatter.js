const { toUpper } = require('ramda');

const inputFormatter = code => {
  const upperCase = toUpper(code);
  return upperCase;
};

module.exports = inputFormatter;
