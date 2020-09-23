const elements = {
  txtUsername: '#username',
  txtPassword: '#password',
  btnSubmit: 'button[type="submit"]',
  txtNotification: '#flash-messages'
};

/**
  * Enters the username
  * @type {import("../../types").NightwatchEnhancedPageObject} 
  */
const commands = {
  /**
   * Enters the username
   * @param {string} username 
   */
  enterUsername(username) {
    return this
      .waitForElementVisible("@txtUsername")
      .setValue("@txtUsername", username)
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

module.exports = {
  elements: elements,
  commands: [commands],
  url: '/login',
  name: 'LoginPage'
};