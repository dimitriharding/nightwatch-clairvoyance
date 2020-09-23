/** @type {import("../../types").NWCPageObject} */

module.exports = {

    // can be string or function
    url: function () {
      return this.api.launchUrl;
    },
    
    elements: {
    
      // shorthand, specifies selector
      mySubmitButton: {
        selector: 'input[type=submit]'
      },
      
      // full
      myTextInput: {
        selector: 'input[type=text]',
        locateStrategy: 'css selector'
      }
    },
    
    commands: [
      {
        myCustomPause() {
          this.click('@mySubmitButton');
          this.api.pause(this.props.myPauseTime);
          return this;
        }
      }
    ],
    
    // object version (best considered immutable)
    props: {
      myPauseTime: 1000
    },
    
    sections: {
    
      myFooterSection: {
      
        selector: '#my-footer',
        locateStrategy: 'css selector',
        
        elements: {
          myLogo: {
            selector: '.my-logo',
            locateStrategy: 'css selector'
          }
        },
        
        commands: [
          {
            myMoveToLogo() {
              this.moveToElement('@myLogo', this.props.myLogoX, this.props.myLogoY);
            }
          }
        ],
        
        // function version (recommended)
        props: function () {
          return {
            myLogoX: 10,
            myLogoY: 10
          };
        },
        
        sections: {
          // additional, nested sections
        }
      }
    }
  };