/**
 * This module is define as CommonJS Module. We should move it to ES6 Module later on and fix the imports.
 * Right now the imports are defined using require, once changed to ES6 module we can move to import module
 * @TODO: Remove dependency of configs from constants.
 */
if (typeof isReactApp === "undefined") {
  var isReactApp = typeof require !== "undefined";
}
const CONSTANTS = {};
let CONFIGS;

if (isReactApp) {
  CONFIGS = require("../../config");
} else {
  CONFIGS = window.RQ.configs;
}

CONSTANTS.APP_MODES = {
  DESKTOP: "DESKTOP",
  EXTENSION: "EXTENSION",
  WORDPRESS: "WORDPRESS",
  CLOUDFLARE: "CLOUDFLARE",
};

CONSTANTS.COMPANY_INFO = {
  SUPPORT_EMAIL: "contact@requestly.io",
};

CONSTANTS.VERSION = 3;

CONSTANTS.TRACK_ERRORS = true;

//No. of days to show onboarding after signing up
CONSTANTS.ONBOARDING_DAYS_TO_EXPIRE = 7;

//No. of tasks to complete on onboarding
CONSTANTS.ONBOARDING_TASKS = 5;

CONSTANTS.FILE_PICKER_URL = "/library/filepicker";

CONSTANTS.VERSIONS = {
  REPLACE_RULE: 2,
};

CONSTANTS.ENV = CONFIGS.env;

CONSTANTS.PUBLIC_NAMESPACE = "__REQUESTLY__";

// Url which gets opened when User clicks on browserAction (requestly icon) in toolbar
CONSTANTS.RULES_PAGE_URL = CONFIGS.WEB_URL + "/rules/";

CONSTANTS.RULES_PAGE_URL_PATTERN = CONSTANTS.RULES_PAGE_URL + "*";

CONSTANTS.PRICING_PAGE_URL = CONFIGS.WEB_URL + "/pricing/";

CONSTANTS.GOODBYE_PAGE_URL = CONFIGS.WEB_URL + "/goodbye/";

// URL For Delay Request API
CONSTANTS.DELAY_API_URL = CONFIGS.WEB_URL + "/delay/";

// URL for Mock Server
CONSTANTS.MOCK_URL = CONFIGS.WEB_URL + "/mock/";

CONSTANTS.DESKTOP_APP_URL = CONFIGS.WEB_URL + "/desktop/intercept-traffic";

CONSTANTS.CONSOLE_LOGGER_ENABLED = "console-logger-enabled";

/**
 * We are calling them as BLACK_LIST_DOMAINS
 * however the usage is code is as the URL containing these substrings, We don't touch those requests
 */
CONSTANTS.BLACK_LIST_DOMAINS = [
  "requestly.in",
  "requestly.io",
  "rq.in",
  "rq.io",
  "__rq",
];

CONSTANTS.STRING_CONSTANTS = {
  SLASH: "/",
};

CONSTANTS.LIMITS = {
  NUMBER_SHARED_LISTS: 10,
  NUMBER_EXECUTION_LOGS: 25,
};

CONSTANTS.DEFAULTS = {
  APP_INIT_TIMEOUT: 5000,
};

CONSTANTS.OBJECT_TYPES = {
  GROUP: "group",
  RULE: "rule",
};

CONSTANTS.RULE_TYPES = {
  REDIRECT: "Redirect",
  CANCEL: "Cancel",
  REPLACE: "Replace",
  HEADERS: "Headers",
  USERAGENT: "UserAgent",
  SCRIPT: "Script",
  QUERYPARAM: "QueryParam",
  RESPONSE: "Response",
  REQUEST: "Request",
  DELAY: "Delay",
};

CONSTANTS.DELAY_REQUEST_CONSTANTS = {
  DELAY_PARAM_NAME: "delay", // string to add as query paramName
  DELAY_PARAM_VALUE: "true", // string to add as query paramValue
  MIN_DELAY_VALUE: 1,
  MAX_DELAY_VALUE_NON_XHR: 10000,
  MAX_DELAY_VALUE_XHR: 5000,
  DELAY_TYPE: {
    CLIENT_SIDE: "clientSideDelay",
    SERVER_SIDE: "serverSideDelay",
  },
  REQUEST_TYPE: {
    XHR: "xmlhttprequest",
  },
  METHOD_TYPE: {
    GET: "GET",
  },
};

CONSTANTS.OBJECT_FORMAT_KEYS = {
  CREATION_DATE: "creationDate",
  NAME: "name",
  ID: "id",
  RULE_TYPE: "ruleType",
  STATUS: "status",
  OBJECT_TYPE: "objectType",
  GROUP_ID: "groupId",
  IS_FAVOURITE: "isFavourite",
};

CONSTANTS.HEADER_NAMES = {
  USER_AGENT: "User-Agent",
};

CONSTANTS.GROUP_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

CONSTANTS.RULE_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

CONSTANTS.SUBSCRIPTION_STATUS = {
  ACTIVE: "active",
  CANCELLED: "cancelled",
};

CONSTANTS.RULE_KEYS = {
  URL: "Url",
  HOST: "host",
  PATH: "path",
  HEADER: "Header",
  OVERWRITE: "Overwrite",
  IGNORE: "Ignore",
  PARAM: "param",
  VALUE: "value",
};

CONSTANTS.PATH_FROM_PAIR = {
  RULE_KEYS: "source.key",
  RULE_OPERATORS: "source.operator",
  SCRIPT_LIBRARIES: "libraries",
  SOURCE_PAGE_URL_OPERATOR: "source.filters.pageUrl.operator",
  SOURCE_PAGE_URL_VALUE: "source.filters.pageUrl.value",
  SOURCE_RESOURCE_TYPE: "source.filters.resourceType",
  SOURCE_REQUEST_METHOD: "source.filters.requestMethod",
  SOURCE_REQUEST_PAYLOAD_KEY: "source.filters.requestPayload.key",
  SOURCE_REQUEST_PAYLOAD_VALUE: "source.filters.requestPayload.value",
};

//auto-suggestion for the header rule
CONSTANTS.HEADER_SUGGESTIONS = {
  Request: [
    { label: "authorization", value: "authorization" },
    { label: "cache-control", value: "cache-control" },
    { label: "cookie", value: "cookie" },
    { label: "connection", value: "connection" },
    { label: "origin", value: "origin" },
    { label: "user-agent", value: "user-agent" },
  ],
  Response: [
    { label: "age", value: "age" },
    {
      label: "access-control-allow-origin",
      value: "access-control-allow-origin",
    },
    {
      label: "access-control-allow-credentials",
      value: "access-control-allow-credentials",
    },
    { label: "expires", value: "expires" },
    { label: "server", value: "server" },
    { label: "x-frame-options", value: "x-frame-options" },
  ],
};

CONSTANTS.URL_COMPONENTS = {
  PROTOCOL: "Protocol",
  URL: "Url",
  HOST: "host",
  PATH: "path",
  QUERY: "query",
  HASH: "hash",
};

CONSTANTS.RULE_OPERATORS = {
  EQUALS: "Equals",
  CONTAINS: "Contains",
  MATCHES: "Matches",
  WILDCARD_MATCHES: "Wildcard_Matches",
};

CONSTANTS.RULE_SOURCE_FILTER_TYPES = {
  PAGE_URL: "pageUrl",
  RESOURCE_TYPE: "resourceType",
  REQUEST_METHOD: "requestMethod",
  REQUEST_DATA: "requestPayload",
};

CONSTANTS.MODIFICATION_TYPES = {
  ADD: "Add",
  REMOVE: "Remove",
  REMOVE_ALL: "Remove All",
  MODIFY: "Modify",
  REPLACE: "Replace",
};

CONSTANTS.NEED_HELP_QUERY_TYPES = {
  FEEDBACK: "Feedback",
  BUG: "Bug",
  QUESTION: "Question",
  FEATURE_REQUEST: "FeatureRequest",
};

CONSTANTS.CLIENT_MESSAGES = {
  GET_SCRIPT_RULES: "getScriptRules",
  DO_SETUP_RESPONSE_RULE_HANDLER: "doSetupResponseRuleHandler",
  GET_USER_AGENT_RULE_PAIRS: "getUserAgentRulePairs",
  OVERRIDE_RESPONSE: "overrideResponse",
  NOTIFY_RULES_APPLIED: "notifyRulesApplied",
  PRINT_CONSOLE_LOGS: "printConsoleLogs",
  GET_SESSION_RECORDING_CONFIG: "getSessionRecordingConfig",
  IS_RECORDING_SESSION: "isRecordingSession",
  GET_TAB_SESSION: "getTabSession",
};

CONSTANTS.EXTENSION_MESSAGES = {
  FOCUS_TAB: "focusTab",
  GET_FULL_LOGS: "getFullLogs",
  CLEAR_LOGS_FOR_TAB: "clearLogsForTab",
  CLEAR_LOGS_FOR_DOMAIN: "clearLogsForDomain",
  GET_FAVOURITE_RULES: "getFavouriteRules",
  GET_PINNED_GROUPS: "getPinnedGroups",
  GET_ALL_RULES: "getAllRules",
  GET_FLAGS: "getFlags",
  GET_TAB_SESSION: "getTabSession",
};

CONSTANTS.HEADERS_TARGET = {
  REQUEST: "Request",
  RESPONSE: "Response",
};

CONSTANTS.REQUEST_TYPES = {
  MAIN_FRAME: "mainFrame",
  PAGE_REQUEST: "pageRequest",
};

CONSTANTS.SCRIPT_TYPES = {
  URL: "url",
  CODE: "code",
};

CONSTANTS.SCRIPT_CODE_TYPES = {
  JS: "js",
  CSS: "css",
};

CONSTANTS.SCRIPT_LOAD_TIME = {
  BEFORE_PAGE_LOAD: "beforePageLoad",
  AFTER_PAGE_LOAD: "afterPageLoad",
};

CONSTANTS.SCRIPT_LIBRARIES = {
  JQUERY: { name: "jQuery", src: "https://code.jquery.com/jquery-2.2.4.js" },
  UNDERSCORE: {
    name: "Underscore",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js",
  },
};

CONSTANTS.REQUEST_BODY_TYPES = {
  STATIC: "static",
  CODE: "code",
};

CONSTANTS.RESPONSE_BODY_TYPES = {
  STATIC: "static",
  CODE: "code",
  LOCAL_FILE: "local_file",
};

CONSTANTS.RESPONSE_CODES = {
  NOT_FOUND: 404,
};

CONSTANTS.STORAGE_KEYS = {
  REQUESTLY_SETTINGS: "rq_settings",
  USER_INFO: "user_info",
  LATEST_NOTIFICATION_READ_BY_USER: "latestNotificationReadId",
  SESSION_RECORDING_CONFIG: "sessionRecordingConfig",
};

CONSTANTS.MESSAGES = {
  DELETE_ITEMS_NO_SELECTION_WARNING:
    "Please select one or more rules to delete.",
  DELETE_ITEMS: "Are you sure you want to delete the selected items?",
  DELETE_GROUP_WITH_RULES_WARNING:
    "There are some rules contained in this group. Please delete or ungroup them before deleting the group.",
  DELETE_GROUP: "Are you sure you want to delete the group?",
  UNGROUP_ITEMS_NO_SELECTION_WARNING:
    "Please select one or more rules to ungroup.",
  UNGROUP_ITEMS: "Are you sure you want to ungroup the selected items?",
  SIGN_IN_TO_VIEW_SHARED_LISTS: "Please login to view your Shared Lists.",
  SIGN_IN_TO_CREATE_SHARED_LISTS: "Please login to share the selected rules",
  SIGN_IN_TO_SUBMIT_QUERY: "Please login to contact our support team.",
  ERROR_AUTHENTICATION:
    "Received some error in authentication. Please try again later!!",
  SHARED_LISTS_LIMIT_REACHED:
    "You can not create more than" +
    CONSTANTS.LIMITS.NUMBER_SHARED_LISTS +
    "shared lists",
  ERROR_TAB_FOCUS: "The tab cannot be focused, as it might have been closed.",
  DEACTIVATE_REQUESTLY_MENU_OPTION: "Deactivate Requestly",
};

CONSTANTS.RESOURCES = {
  EXTENSION_ICON: "/resources/images/48x48.png",
  EXTENSION_ICON_GREYSCALE: "/resources/images/48x48_greyscale.png",
  EXTENSION_ICON_GREEN: "/resources/images/48x48_green.png",
};

CONSTANTS.GA_EVENTS = {
  CATEGORIES: {
    RULES: "rules",
    RULE: "rule",
    GROUP: "group",
    USER: "user",
    SHARED_LIST: "shared list",
    TRASH: "trash",
    RULE_LOGS: "rule logs",
    EXTENSION: "extension",
    IN_APP_NOTIFICATION: "InAppNotification",
    NEED_HELP_FEATURE: "need help feature",
    PRICING: "pricing",
    LICENSE: "license",
    LIBRARY: "library",
    UNLOCK: "unlock",
    REMOTE_RULES: "remoteRules",
    SPONSOR_SIDERAIL: "sponsor_siderail",
    LOGIN: "login",
    SIGNUP: "signup",
    REFERRAL: "referral",
    PAGE_VISITS: "page visits",
    REQUEST_UPGRADE: "request upgrade",
    MARKETPLACE: "marketplace",
    CHECKOUT: "checkout page",
    TEAMS: "teams page",
    ONBOARDING: "onboarding page",
    RULE_PAIRS: "rule pairs",
    DESKTOP_APP: "desktop app",
  },
  ACTIONS: {
    MODIFIED: "modified",
    CREATED: "created",
    DELETED: "deleted",
    ACTIVATED: "activated",
    DEACTIVATED: "deactivated",
    IMPORTED: "imported",
    EXPORTED: "exported",
    LIMIT_REACHED: "limit reached",
    AUTHENTICATED: "authenticated",
    VIEWED: "viewed",
    CLICKED: "clicked",
    COPIED: "duplicated",
    MARKED_FAVOURITE: "marked favourite",
    UNMARKED_FAVOURITE: "unmarked favourite",
    WORKFLOW_STARTED: "workflow started",
    ALREADY_LOGIN: "already login",
    LOGIN_REQUESTED: "login requested",
    LOGIN_DONE: "login done",
    LOGIN_REJECTED: "login rejected",
    FORM_SUBMITTED: "form submitted",
    FORM_REJECTED: "form rejected",
    INVALID_SUBMIT: "invalid submit",
    GROUPED: "grouped",
    UNGROUPED: "ungrouped",
    SHARED: "shared",
    ERROR: "error occured",
    TASK_COMPLETED: "task completed",
    BACKUP_CREATED: "backup created",
    BACKUP_USED: "backup used",

    CARD_ERROR: "card error",
    CARD_ACCEPTED: "card accepted",
    CARD_ENTERED: "card num and cv entered",

    CURRENCY_CHANGE: "currency_changed",
    DURATION_CHANGE: "duration_changed",
    APPLIED_SUCCESSFULLY: "applied_successfully",
    APPLIED_UNSUCCESSFULLY: "applied_unsuccessfully",

    REVOKED: "revoked",
    BOUGHT: "bought",
    UPDATED: "updated",
    REQUEST_ADMIN: "enterprise_plan_requested",

    UNINSTALLED: "uninstalled",
    UNINSTALL_RESPONSE: "uninstall_response",

    ROUTE_VIEWED: "route_viewed",
    EMAIL_LOGIN_PERFORMED: "email_login_performed",
    EMAIL_SIGNUP_PERFORMED: "email_signup_performed",
    GMAIL_LOGIN_PERFORMED: "gmail_login_performed",
    GMAIL_SIGNUP_PERFORMED: "gmail_signup_performed",
    MICROSOFT_LOGIN_PERFORMED: "microsoft_login_performed",
    APPLE_LOGIN_PERFORMED: "apple_login_performed",

    REFERRAL_APPLIED: "referral_applied",
    REFERRAL_FAILED: "referral_failed",

    EMAIL_VERIFICATION_RESEND: "resend_email_verification",
    EMAIL_VERIFICATION_SUCCESSFUL: "email_verification_successful",
    EMAIL_VERIFICATION_FAILED: "email_verification_failed",

    TRAFFIC_TABLE_VIEWED: "traffic_table_viewed",
    TRAFFIC_TABLE_MODIFIED: "traffic_table_modified",

    APP_LAUNCHED: "app_launched",
    APP_CLOSED: "app_closed",
    APP_NOT_LAUNCHED: "app_not_launched",
    PROXY_SERVER: "proxy_server_started",
    BG_PROCESS: "bg_process_started",

    MANUAL_SETUP_MAC: "manual_setup_mac",

    DARK_MODE_ENABLED: "dark_mode_enabled",
    DARK_MODE_DISABLED: "dark_mode_disabled",
    UPGRADE_REQUIRED_FOR_DARK_MODE: "upgrade_required_for_dark_mode",

    SIMULATE_RULE: "simulate_rule",
    EXECUTION_LOGS: "execution_logs",
  },
  ATTR: {
    PAYMENT_MODE: "payment_mode",
    PLANNAME: "planname",
    PLAN_DURATION: "plan_duration",
    PLAN_ID: "plan_id",
    PLAN_START_DATE: "plan_startDate",
    PLAN_END_DATE: "plan_endDate",
    COUPON: "coupon",
    COUPON_VALUE: "coupon_value",
    LICENSE: "licensekey",
    COMPANY: "company",

    PROFILE: "profile",

    REMOTE_RULES_ENDPOINT: "remoteRulesEndpoint",
    REMOTE_RULES_FREQUENCY: "remoteRulesFrequency",

    NUM_RULES: "NUM_RULES",
    NUM_ACTIVE_RULES: "NUM_ACTIVE_RULES",
    NUM_GROUPS: "NUM_GROUPS",
    NUM_ACTIVE_GROUPS: "NUM_ACTIVE_GROUPS",
    NUM_SHARED_LISTS: "NUM_SHARED_LISTS",

    ONBOARDING_V1_DONE: "ONBOARDING_V1_DONE",

    SIGNUP_DATE: "SIGNUP_DATE",

    EXTENSION_INSTALL_DATE: "install_date",
    DESKTOP_INSTALL_DATE: "desktop_install_date",

    APP_MODE: "APP_MODE",
    EMAIL_TYPE: "EMAIL_TYPE",
    EMAIL_DOMAIN: "EMAIL_DOMAIN",
    IS_PREMIUM: "IS_PREMIUM",

    TRIAL_MODE_ENABLED: "trial_mode_enabled",
  },
  VALUES: {
    PAYPAL: "paypal",
  },
  GA_CUSTOM_DIMENSIONS: {
    USER_ID: "dimension1",
  },
  GA_CUSTOM_METRICS: {
    num_rules: "metric1",
  },
};

CONSTANTS.USER = {
  AUTHORIZED: "authorized-user",
  UNAUTHORIZED: "unauthorized-user",
};

CONSTANTS.FIREBASE_NODES = {
  USERS: "users",
  PUBLIC: "public",
  SHARED_LISTS: "sharedLists",
  FEEDBACK: "feedback",
  FILES: "files",
};

CONSTANTS.DATASTORE = {
  ACTIONS: {
    CHECK_USER_AUTH: "check:userAuthenticated",
    AUTHENTICATE: "authenticate",
    FETCH_USER_DETAILS: "fetchUserDetails",
    GETVALUE: "getValue",
    SETVALUE: "setValue",
  },
};

CONSTANTS.MESSAGE_HANDLER = {
  ACTIONS: {
    SUBMIT_EVENT: "submitEvent",
    SUBMIT_ATTR: "submitAttr",
  },
  MESSAGE_TYPES: {
    EVENT: "event",
    ATTRIBUTE: "attribute",
  },
  SINKS: {
    CUSTOMERLY: "customerly",
  },
};

CONSTANTS.REQUEST_STATE = {
  LOADING: "LOADING",
  COMPLETE: "COMPLETE",
};

CONSTANTS.getSharedListURL = function (shareId, sharedListName) {
  const formattedSharedListName = sharedListName
    .replace(new RegExp(" +|/+", "g"), "-")
    .replace(/-+/g, "-");
  return (
    CONSTANTS.RULES_PAGE_URL +
    "#sharedList/" +
    shareId +
    "-" +
    formattedSharedListName
  );
};

CONSTANTS.getSharedListTimestamp = function (sharedListId) {
  return sharedListId.split("-")[0];
};

CONSTANTS.fireAjax = function (requestURL, async) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", requestURL, async);
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject();
        }
      }
    };
    request.send();
  });
};

if (isReactApp) {
  module.exports = CONSTANTS;
} else {
  /** For legacy apps- browser extension */
  Object.assign(window.RQ, CONSTANTS);
}
