# JLA-dom-events-html
"This is a fun little exercise reading and setting HTML elements via javascript and using element event clicks to display text in the html <div>

root html: dom-dev-main.html
supporting .js files are loaded by .html file from the root folder

This uses localStorage (as a lark - experimenting with the API)
Takeaway: localStorage only stores strings - other types like 

numbers or arrays are converted to strings in localStorage so type is NOT preserved.
IMPORTANT - Chrome - localStorage - ACCESS DENIED - when blocking 3rd party cookies 

https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document

Natively, Chrome supports some ES6 features, like arrow functions; however, import modules is not supported.

-- import {doSomething} from './dom-dev-function.js' syntax error ES6 modules not supported in this environment

Using babel standalone to provide ES6/7 features has code requirements:

<script src="babel-standalone.js"></script>
<script type='text/babel' src='dom-const-msg.js'></script>
-- babel standalone loads OK, but cannot load the .js script files -- due to cross-origin protocol restrictions.
	
https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document

Using ES5 dependency file load order is necessary -- place function scripts first 
1-Mar-2018 - Added babel standalone - test if ES6 module syntax can be used.
-- Cross-origin protocl restrictions require supported  protocol schemes: http, data, chrome, chrome-extension, https.
-- FIX - remove type='text/babel' from script elements
-- Explore babel HTML implementation another time.
Call these files via http from S3 or locally as data- elements."
