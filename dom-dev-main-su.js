//import {doSomething} from './dom-dev-function.js';
/* syntax error ES6 modules not supported in this environment

 IMPORTANT - Chrome - localStorage - ACCESS DENIED - when blocking 3rd party cookies 
 
 
*/
		// init the counter for this session 
		if (!localStorage.tog) localStorage.tog = 0
		
		// capture title element from the HTML file		
		const savage = document.getElementById('title')
		savage.addEventListener('click', doSomething, false);
		
		// capture roster element from HTML file
		const heroes = document.getElementById('roster')
		
		const clen = heroes.children.length
		const resp = []
		
		// load the child elements
		for (let ctr = 0; ctr < clen; ctr++ ){
			resp[ctr] = heroes.children[ctr];
			resp[ctr].addEventListener('click', doSomething, false);
		}

		// report # children processed
		//alert()
		document.getElementById("output").innerHTML = heroes.children.length + ' child elements loaded from roster'
