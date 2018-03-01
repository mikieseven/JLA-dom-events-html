
/* separating the doSomething function into a file
arrow function - doSomething(event) used as callback on the listeners 
 - syntax error ES6 modules import export not supported
 
 Experiment w/ babel standalone for browser to implement ES7
 - babel calls in dom-dev-main.html 
 
 IMPORTANT - Chrome - localStorage - ACCESS DENIED - when blocking 3rd party cookies
 
*/
/* Code moved to dom-const-msg.js 
const diana_prince="WonderWoman with mock cruelty 'restrains' the struggling Harley Quinn with a 'rope trick'"
const bruce_wayne="Because...I'M BATMAN!"
const clark_kent='Up, up, and away!'
const unk_odd ='Emperor Smith mobilizes Chun and Remo'
const unk_even ='Have no fear the man of bronze is here!'
const unk_response ='Unknown super entity responded: ' 
*/			

	const doSomething = (event) => {
		
		console.log(event.target.id.toUpperCase())
		
		switch (event.target.id) {
			  case 'diana':
				localStorage.responder=diana_prince
				break;
			  case 'bruce':
				localStorage.responder=bruce_wayne
				break
			  case 'clark':
				localStorage.responder=clark_kent
				break
			  case 'title':
				//alert('The JLA heroes are unavailable...');
				// toggle response based on % of 'tog' in localStorage
				(localStorage.tog % 2===0) ?
				localStorage.responder = unk_odd :
				localStorage.responder = unk_even
				localStorage.tog++ // increment the responder counter
				break;
			  default:
				//alert('Unknown super entity responded: ' + event.target.id.toUpperCase() )
				localStorage.responder= unk_response + event.target.id.toUpperCase()
				break;
			}
			// display responder
			//alert(localStorage.responder)
			document.getElementById("output").innerHTML = '<p>'+localStorage.responder+'</p>';
			console.log(localStorage.responder)
			
			// stop propagation up to document.onclick
			event.stopPropagation() 
		} 
		// end doSomething
			