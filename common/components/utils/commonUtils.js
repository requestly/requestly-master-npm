const COMMON_UTILS = {};

COMMON_UTILS.GET_FUNCTION_FROM_STRING = function (functionStringEscaped) {
  return new Function("return " + functionStringEscaped)();
};

module.exports = COMMON_UTILS;
