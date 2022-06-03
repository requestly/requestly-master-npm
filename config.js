
  if (typeof isReactApp === "undefined") {
    var isReactApp = typeof require !== "undefined";
  }

  const configs = {
  "browser": "chrome",
  "storageType": "sync",
  "contextMenuContexts": [
    "browser_action"
  ],
  "collectExtUsageStats": true,
  "env": "dummy",
  "WEB_URL": "https://app.requestly.io",
  "firebaseConfig": {
    "apiKey": "xx",
    "authDomain": "xx",
    "databaseURL": "xx",
    "projectId": "xx",
    "storageBucket": "xx",
    "messagingSenderId": "xx"
  },
  "logLevel": "debug",
  "stripeConfig": {
    "publishableKey": "xx"
  },
  "version": "22.1.18"
};
  if (isReactApp) {
    /** For React App */
    module.exports = configs;
  } else {
    /** 
     * For legacy apps- browser extension 
     * Added if-check because desktop app breaks on compilation
     */
    if (window) {
      window.RQ = window.RQ || {};
      window.RQ.configs = configs;  
    }
  }  
