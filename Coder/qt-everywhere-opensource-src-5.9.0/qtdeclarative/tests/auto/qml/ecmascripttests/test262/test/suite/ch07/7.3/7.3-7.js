/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch07/7.3/7.3-7.js
 * @description 7.3 - ES5 recognizes the character <LS> (\u2028) as terminating regular expression literals
 */


function testcase() {
        try {
            eval("var regExp =  /[\u2028]/");
            regExp.test("");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
