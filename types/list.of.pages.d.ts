
    import { UserDefinedLoginPageObject } from './pages/LoginPage';
import { UserDefinedhomeObject } from './pages/home';
import { UserDefinednightwatchFeaturesObject } from './pages/nightwatchFeatures';
import { UserDefinedpageObject } from './pages/page';
import { UserDefinedsearchResultsObject } from './pages/searchResults';
// [ListOfImports END] 

export interface ListOfUserDefinedPageObjects {
    // [ListOfUserDefinedPageObjects START]
       LoginPage?: UserDefinedLoginPageObject;
			 home?: UserDefinedhomeObject;
			 nightwatchFeatures?: UserDefinednightwatchFeaturesObject;
			 page?: UserDefinedpageObject;
			 searchResults?: UserDefinedsearchResultsObject;
    // [ListOfUserDefinedPageObjects END]
}
    