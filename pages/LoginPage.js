/** @typedef {import("./../node_modules/@types/nightwatch").UserDefinedPage} UserDefinedPage */
/** @typedef {import("./../node_modules/@types/nightwatch").NightwatchBrowser} NightwatchBrowser */

const elements = {
  txtUsername: '#username',
  txtPassword: '#password',
  btnSubmit: 'button[type="submit"]',
  txtNotification: '#flash-messages'
};

const commands = {
  /**
   * Enters the username
   * @param {string} username 
   * @type {} <- Needs to be the correct type so `this` will be the pageObject API
   */
  enterUsername(username) {
    return this
      .waitForElementVisible("@txtUsername")
      .setValue("@txtUsername", username);
  },

  /**
   * Enters the password
   * @param {string} username 
   */
  enterPassword(password) {
    return this
      .waitForElementVisible("@txtPassword")
      .setValue("@txtPassword", password);
  }
};

/** @type {UserDefinedPage} */
module.exports = {
  elements: elements,
  commands: [commands],
  url: '/login'
};