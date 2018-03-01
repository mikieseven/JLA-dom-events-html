# JLA-dom-events-html
"This is a fun little exercise reading and setting HTML elements via javascript and using element event clicks to display text in the html <div>

root html: dom-dev-main.html -- supporting .js files are loaded by .html file from the root folder

This app uses localStorage (experimenting with the HTML5 API)
NOTE: HTML5 API - this code uses the localStorage API. In Chrome, cross-site-scripting has protocol requirements that affect code execution (yeah duh) however, some extensions and privacy settings will affect access to localStorage; I found that disabling 3rd party cookies will cause the localStorage Access Denied error.

A resource from Chromium:
https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document

Takeaway: localStorage only stores strings - other types like numbers or arrays are converted to strings in localStorage so type is NOT preserved.

IMPORTANT - Chrome - localStorage - ACCESS DENIED - when blocking 3rd party cookies 

Natively, Chrome supports some ES6 features, like arrow functions; however, import modules is not supported.
-- import {doSomething} from './dom-dev-function.js' syntax error ES6 modules not supported in this environment

Using babel standalone to provide ES6/7 features has code requirements:

<script src="babel-standalone.js"></script>
<script type='text/babel' src='dom-const-msg.js'></script>
-- babel standalone loads OK, but cannot load the .js script files -- due to cross-origin protocol restrictions.

Using ES5 dependency file load order is necessary -- place function scripts first 
1-Mar-2018 - Added babel standalone - test if ES6 module syntax can be used.
-- Cross-origin protocl restrictions require supported  protocol schemes: http, data, chrome, chrome-extension, https.
-- FIX - remove type='text/babel' from script elements
-- Explore babel HTML implementation another time.
-- Call the supporting files via http from S3 or locally as data- elements."
