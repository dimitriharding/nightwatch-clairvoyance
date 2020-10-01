
// [SEARCHRESULTS DEFINITIONS START]}
// Type definitions for searchResults
// Auto Generated By Nightwatch Clairvoyance
// Definitions by: Dimitri Harding <https://github.com/dimitriharding>
// TypeScript Version: 2.3

export type UserDefinedsearchResultsObject = () => searchResults;

export type searchResultsSelector = "@results";

export interface searchResults extends UserDefinedPageObject, searchResultsElementCommands, searchResultsCommonAssertions {

    assert: searchResultsCommonAssertions;
    expect: Expect;
    verify: searchResultsCommonAssertions;


    /**
     * This command is an alias to url and also a convenience method because when called without any arguments
     *  it performs a call to .url() with passing the value of `url` property on the page object.
     * Uses `url` protocol command.
     */
    navigate(url?: string, callback?: () => void): this;

    
}
export interface searchResultsElementCommands {
    /**
     * Clear a textarea or a text input element's value. Uses `elementIdValue` protocol action internally.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.clearValue('input[type=text]');
     * };
     *
     * @see elementIdClear
     */
    clearValue(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Simulates a click event on the given DOM element. Uses `elementIdClick` protocol action internally.
     *
     * The element is scrolled into view if it is not already pointer-interactable.
     * See the WebDriver specification for <a href="https://www.w3.org/TR/webdriver/#element-interactability" target="_blank">element interactability</a>
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.click("#main ul li a.first");
     * };
     *
     * @see elementIdClick
     */
    click(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<null>) => void): this;

    /**
     * Retrieve the value of an attribute for a given DOM element. Uses `elementIdAttribute` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getAttribute("#main ul li a.first", "href", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "#home");
     *   });
     * };
     *
     * @see elementIdAttribute
     */
    getAttribute(selector: string & searchResultsSelector , attribute: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string | null>) => void): this;

    /**
     * Retrieve the value of a css property for a given DOM element. Uses `elementIdCssProperty` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getCssProperty("#main ul li a.first", "display", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, 'inline');
     *   });
     * };
     *
     * @see elementIdCssProperty
     */
    getCssProperty(selector: string & searchResultsSelector, cssProperty: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Determine an element's size in pixels. Uses `elementIdSize` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getElementSize("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value.width, 500);
     *     this.assert.equal(result.value.height, 20);
     *  });
     * };
     *
     * @see elementIdSize
     */
    getElementSize(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ width: number; height: number }>) => void): this;

    /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page.
     *
     * The element's coordinates are returned as a JSON object with x and y properties. Uses `elementIdLocation` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getLocation("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value.x, 200);
     *     this.assert.equal(result.value.y, 200);
     *   });
     * };
     *
     * @see elementIdLocation
     */
    getLocation(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void): this;

    /**
     * Determine an element's location on the screen once it has been scrolled into view. Uses `elementIdLocationInView` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getLocationInView("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value.x, 200);
     *     this.assert.equal(result.value.y, 200);
     *   });
     * };
     *
     * @see elementIdLocationInView
     */
    getLocationInView(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<{ x: number; y: number }>) => void): this;

    /**
     * Query for an element's tag name. Uses `elementIdName` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getTagName("#main ul li .first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "a");
     *   });
     * };
     *
     * @see elementIdName
     */
    getTagName(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Returns the visible text for the element. Uses `elementIdText` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getText("#main ul li a.first", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "nightwatchjs.org");
     *   });
     * };
     *
     * @see elementIdText
     */
    getText(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Returns a form element current value. Uses `elementIdValue` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.getValue("form.login input[type=text]", function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, "enter username");
     *   });
     * };
     *
     * @see elementIdValue
     */
    getValue(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;

    /**
     * Determine if an element is currently displayed. Uses `elementIdDisplayed` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.isVisible('#main', function(result) {
     *     this.assert.equal(typeof result, "object");
     *     this.assert.equal(result.status, 0);
     *     this.assert.equal(result.value, true);
     *   });
     * };
     *
     * @see elementIdDisplayed
     */
    isVisible(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<boolean>) => void): this;

    /**
     * Move the mouse by an offset of the specified element. If an element is provided but no offset, the mouse will be moved to the center of the element.
     * If the element is not visible, it will be scrolled into view.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.moveToElement('#main', 10, 10);
     * };
     *
     * @see moveTo
     */
    moveToElement(selector: string & searchResultsSelector, xoffset: number, yoffset: number, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Sends some text to an element. Can be used to set the value of a form element or to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
     *
     * <div class="alert alert-warning"><strong>setValue</strong> does not clear the existing value of the element. To do so, use the <strong>clearValue()</strong> command.</div>
     *
     * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as `browser.Keys`.
     *
     * @example
     * // send some simple text to an input
     * this.demoTest = function (browser) {
     *   browser.setValue('input[type=text]', 'nightwatch');
     * };
     * //
     * // send some text to an input and hit enter.
     * this.demoTest = function (browser) {
     *   browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
     * };
     *
     * @see elementIdValue
     */
    setValue(selector: string & searchResultsSelector, inputValue: string | string[], callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;
    /**
     * Alias for `setValue`.
     * @see setValue
     */
    sendKeys: SharedCommands["setValue"];

    /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element. Uses `submit` protocol command.
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.submitForm('form.login');
     * };
     *
     * @see submit
     */
    submitForm(selector: string & searchResultsSelector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): this;

    /**
     * Opposite of `waitForElementPresent`. Waits a given time in milliseconds for an element to be not present (i.e. removed)
     * in the page before performing any other commands or assertions.
     *
     * If the element is still present after the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementNotPresent('#dialog', 1000);
     * };
     *
     * @see waitForElementPresent
     * @since v0.4.0
     */
    waitForElementNotPresent(selector: string & searchResultsSelector, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;

    /**
     * Opposite of `waitForElementVisible`. Waits a given time in milliseconds for an element to be not visible (i.e. hidden but existing)
     * in the page before performing any other commands or assertions.
     *
     * If the element fails to be hidden in the specified amount of time, the test fails.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementNotVisible('#dialog', 1000);
     * };
     *
     * @since v0.4.0
     * @see waitForElementVisible
     */
    waitForElementNotVisible(selector: string & searchResultsSelector, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;

    /**
     * Waits a given time in milliseconds for an element to be present in the page before performing any other commands or assertions.
     *
     * If the element fails to be present in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementPresent('body', 1000);
     *   // continue if failed
     *   browser.waitForElementPresent('body', 1000, false);
     *   // with callback
     *   browser.waitForElementPresent('body', 1000, function() {
     *     // do something while we're here
     *   });
     *   // custom Spanish message
     *   browser.waitForElementPresent('body', 1000, 'elemento %s no era presente en %d ms');
     *   // many combinations possible - the message is always the last argument
     *   browser.waitForElementPresent('body', 1000, false, function() {}, 'elemento %s no era presente en %d ms');
     * };
     */
    waitForElementPresent(selector: string & searchResultsSelector, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;

    /**
     * Waits a given time in milliseconds for an element to be visible in the page before performing any other commands or assertions.
     *
     * If the element fails to be present and visible in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
     *
     * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
     *
     * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
     *
     * @example
     * this.demoTest = function (browser) {
     *   browser.waitForElementVisible('body', 1000);
     *   // continue if failed
     *   browser.waitForElementVisible('body', 1000, false);
     *   // with callback
     *   browser.waitForElementVisible('body', 1000, function() {
     *     // do something while we're here
     *   });
     *   // custom Spanish message
     *   browser.waitForElementVisible('body', 1000, 'elemento %s no era visible en %d ms');
     *   // many combinations possible - the message is always the last argument
     *   browser.waitForElementVisible('body', 1000, false, function() {}, 'elemento %s no era visible en %d ms');
     * };
     */
    waitForElementVisible(selector: string & searchResultsSelector, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;
}

export interface searchResultsCommonAssertions {
    /**
     * Checks if the given attribute of an element contains the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.attributeContains('#someElement', 'href', 'google.com');
     *    };
     * ```
     */
    attributeContains(selector: string & searchResultsSelector, attribute: string, expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given attribute of an element has the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.attributeEquals('body', 'data-attr', 'some value');
     *    };
     * ```
     */
    attributeEquals(selector: string & searchResultsSelector, attribute: string, expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element contains the specified text.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.containsText('#main', 'The Night Watch');
     *    };
     * ```
     */
    containsText(selector: string & searchResultsSelector, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element has the specified CSS class.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.cssClassPresent('#main', 'container');
     *    };
     * ```
     */
    cssClassPresent(selector: string & searchResultsSelector, className: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element exists in the DOM.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.elementNotPresent(".should_not_exist");
     *    };
     * ```
     */
    cssClassNotPresent(selector: string & searchResultsSelector, className: string, msg?: string): NightwatchAPI;

    /**
     * Checks if the specified css property of a given element has the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.cssProperty('#main', 'display', 'block');
     *    };
     * ```
     */
    cssProperty(selector: string & searchResultsSelector, cssProperty: string, expected: string | number, msg?: string): NightwatchAPI;

    deepEqual(value: any, expected: any, message?: string): NightwatchAPI;

    deepStrictEqual(value: any, expected: any, message?: string): NightwatchAPI;

    doesNotThrow(value: any, expected: any, message?: string): NightwatchAPI;

    /**
     * Checks if the given element exists in the DOM.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.elementPresent("#main");
     *    };
     * ```
     */
    elementPresent(selector: string & searchResultsSelector, msg?: string): NightwatchAPI;

    /**
     * Checks if the given element exists in the DOM.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.elementNotPresent(".should_not_exist");
     *    };
     * ```
     */
    elementNotPresent(selector: string & searchResultsSelector, msg?: string): NightwatchAPI;

    equal(value: any, expected: any, message?: string): NightwatchAPI;

    fail(actual?: any, expected?: any, message?: string, operator?: string): NightwatchAPI;

    /**
     * Checks if the given element is not visible on the page.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.hidden(".should_not_be_visible");
     *    };
     * ```
     */
    hidden(selector: string & searchResultsSelector, msg?: string): NightwatchAPI;

    ifError(value: any, message?: string): NightwatchAPI;

    notDeepEqual(actual: any, expected: any, message?: string): NightwatchAPI;

    notDeepStrictEqual(value: any, message?: string): NightwatchAPI;

    notEqual(actual: any, expected: any, message?: string): NightwatchAPI;

    notStrictEqual(value: any, expected: any, message?: string): NightwatchAPI;

    ok(actual: boolean, message?: string): NightwatchAPI;

    strictEqual(value: any, expected: any, message?: string): NightwatchAPI;

    throws(fn: () => void, message?: string): NightwatchAPI;

    /**
     * Checks if the page title equals the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.title("Nightwatch.js");
     *    };
     * ```
     */
    title(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the page title equals the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.title("Nightwatch.js");
     *    };
     * ```
     */
    titleContains(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the current URL contains the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.urlContains('google');
     *    };
     * ```
     */
    urlContains(expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the current url equals the given value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.urlEquals('https://www.google.com');
     *    };
     * ```
     */
    urlEquals(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given form element's value equals the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.value("form.login input[type=text]", "username");
     *    };
     * ```
     */
    value(selector: string & searchResultsSelector, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given form element's value contains the expected value.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.valueContains("form.login input[type=text]", "username");
     *    };
     * ```
     */
    valueContains(selector: string & searchResultsSelector, expectedText: string, message?: string): NightwatchAPI;

    /**
     * Checks if the given element is visible on the page.
     *
     * ```
     *    this.demoTest = function (client) {
     *      browser.<assert | verify>.visible(".should_be_visible");
     *    };
     * ```
     */
    visible(selector: string & searchResultsSelector, message?: string): NightwatchAPI;

    NightwatchAssertionsError: NightwatchAssertionsError;
}
// [SEARCHRESULTS DEFINITIONS END]}