const CONFIG = require("./config");
const CONSTANTS = require("./common/constants/index");
const LOGGER = require("./common/components/logger/logger");
const RULE_PROCESSOR = require("./components/rule-processor/dist/ruleprocessors");
const UTILS = require("./common/components/utils/commonUtils");

module.exports = {
  CONFIG,
  CONSTANTS,
  COMPONENTS: {
    LOGGER,
  },
  RULE_PROCESSOR,
  UTILS,
};
