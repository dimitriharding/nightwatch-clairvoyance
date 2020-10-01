/** @type {import("../../types").NWCTS} */

module.exports = {

  before(client){
    
  },

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


// describe("Login Tests", () => {
//   it("Successful login", (client) => {
//     const loginPage = client.page.LoginPage();
//     const page  = client.page.page();

//     loginPage
//       .navigate()
//       .enterUsername('tomsmith')
//       .enterPassword('SuperSecretPassword!')
//       .click('@btnSubmit')
//       .verify.containsText('@txtNotification', 'You logged into a secure area!');
//   });

//   it("[regression] Wrong Password", (client) => {
//     const loginPage = client.page.LoginPage();

//     loginPage
//       .navigate()
//       .enterUsername('tomsmith')
//       .enterPassword('SuperSecretPassword')
//       .click('@btnSubmit')
//       .verify.containsText('@txtNotification', 'Your password is invalid!');
//   });
// });



