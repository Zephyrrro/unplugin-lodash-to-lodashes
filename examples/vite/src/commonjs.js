const isNumber = require('lodash/isNumber');

function CommonJS() {
  return isNumber(123)
}

exports.isNumber = CommonJS;