import { Nightwatch, NightwatchCustomCommands , EnhancedElementInstance, SharedCommands, EnhancedPageObjectSections, NightwatchAssertions, WebDriverProtocol, Expect, NightwatchTestOptions, NightwatchKeys, NightwatchTestSuite, NightwatchGlobals, ElementCommands } from 'nightwatch'
import {ListOfUserDefinedPageObjects} from './list.of.pages'; 

export interface NightwatchBrowser extends NightwatchAPI, NightwatchCustomCommands {
}

export type NightwatchTest = (browser: NightwatchBrowser) => void;

export type NightwatchDescribe = () => NightwatchTest[];

export interface NWCTestSuite {
    [name: string]: NightwatchTest
}

export type NWCTS = NWCTestSuite;

export interface NightwatchEnhancedPageObject extends Nightwatch, ElementCommands {
    api: NightwatchAPI
}

export type NWCPageObject = NightwatchEnhancedPageObject

export interface NightwatchAPI extends SharedCommands, WebDriverProtocol, NightwatchCustomCommands {
    assert: NightwatchAssertions;
    expect: Expect;
    verify: NightwatchAssertions;

    page: {
        [name: string]: () => UserDefinedPageObject<any, any, any>;
    } & ListOfUserDefinedPageObjects;

    /**
     * SessionId of the session used by the Nightwatch api.
     */
    sessionId: string;

    /**
     * Override the sessionId used by Nightwatch client with another session id.
     */
    setSessionId(sessionId: string): this;

    options: NightwatchTestOptions;

    Keys: NightwatchKeys;

    currentTest: NightwatchTestSuite;

    globals: NightwatchGlobals;

    launchUrl: string;
    launch_url: string;
}

export type EnhancedPageObjectCommand = ElementCommands;


export interface CustomPageObjectCommand extends  EnhancedPageObjectCommands<NightwatchEnhancedPageObject> {}

export interface EnhancedPageObjectCommands<T> {

    /**
     * A reference to the parent object instance.
     * This is the parent section or the page object that contained the definition for this object.
     */
    parent: T;
}


export type UserDefinedPageObject<Commands = {}, Elements = {}, Sections extends EnhancedPageObjectSections = {}> = Nightwatch & NightwatchCustomCommands & Commands & {
    /**
     * A map of Element objects (see [Enhanced Element Instances](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-element-instances)) used by element selectors.
     */
    elements: {
        [name: string]: EnhancedElementInstance<UserDefinedPageObject<Commands, Elements, Sections>>;
    };
    
    commands: {
        [key : string] : EnhancedPageObjectCommands<UserDefinedPageObject<Commands, Elements, Sections>>;
    }[];

    section: Sections;

    /**
     * The name of the page object as defined by its module name (not including the extension).
     * This is the same name used to access the `page` object factory from the page reference in the command API.
     */
    name: string;
};
