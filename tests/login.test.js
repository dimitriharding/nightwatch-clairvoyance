/** @typedef {import("../nightwatch-clairvoyance").NightwatchTest} NightwatchTest */ // <--- importing nightwatch-clairvoyance

module.exports = {

  /** @type {NightwatchTest} */ //<-- telling VScode that this is a Nightwatch test 
  "Successful login": (client) => {
    
    const loginPage = client.page.LoginPage();

    loginPage
      .navigate()
      .enterUsername('tomsmith')
      .enterPassword('SuperSecretPassword!')
      .click('@btnSubmit')
      .verify.containsText('@txtNotification', 'You logged into a secure area!');
  },

  "Wrong Password": (client) => {

      const loginPage = client.page.LoginPage();

      loginPage
        .navigate()
        .enterUsername('tomsmith')
        .enterPassword('SuperSecretPassword')
        .click('@btnSubmit')
        .verify.containsText('@txtNotification', 'Your password is invalid!');
  }
};
