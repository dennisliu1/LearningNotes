Object
Function
Number
Math
Date
String
RegExp
Array
Map
Promise

Constructor (New)
Prototype & Inheritance
	Object.prototype
		- constructor prototype
		- used to construct instances
		- properties in here so all instances of created Object get those properties
	Object.getPrototypeOf()
	Object.setPrototypeOf()
		- instance prototype
		- used for inheritance
Promise
	a promise can only succeed / fail once
	promises can be chained after it's done
	promises execute its content on creation
		so passing .then(promiseFunction()) vs .then(promiseFunction) returns differently!
		.then(promiseFunction()) = .then(new Promise(){})
		.then(promiseFunction)   = .then(function(){})
	Promise states:
		fulfilled - promise done, succeeded
		rejected  - promise done, failed
		pending   - promise not done
		settled   - promise done
	optional success / failure functions, so can chain
		then(function(result)*, function(error)*)
			promise
				.then(function(result) {
						console.log("fulfilled");
					}, function(err) {
						console.log("rejected");
					});
	Chaining
		value
			then() can chain different types too, not just promises
			then(function(prevResult){})
		promise
			waits for promise to be settled, then does stuff
	errors
		catch(function(error){})
		same as catch(undefined, function(error){})
		promise rejects skips to next reject function
	exceptions & promises
		resolve(returnObj)
		reject(Error("status msg"))
	Parallelism & sequencing
		- chain async sequential .then() in a loop
			Array.forEach(function(curr, index, arr))
			Array.reduce(function(iter,curr, index*, arr*){}, startingIter)
			startingIter = Promise.resolve();
		- if order does not matter, use .all()
			Array.map(promiseFunction())
			results[] = .all(promises[])
			result[i] = promise[i] return
	Summary
		Promise.resolve(returnObj)
		Promise.reject(errorObj)
		new Promise(function(resolve, reject))
			resolve(returnObj)
			reject(errorObj)
		result = promise.then(function(prevResult)*, function(error)*)
		result[] = promise.all(promise[])
		

EventTarget
	// event listener stuff
		obj.addEventListener('event', function(){}, options)
		obj.removeEventListener('event', function(){}, options)
		obj.dispatchEvent(event)
Node
	// DOM Tree stuff
	// Traversal
		node.ownerDocument
		node.parentNode
		node.hasChildNodes()
		node.childNodes[]
		node.firstChild
		node.lastChild
		node.nextSibling
		node.previousSibling
	// Manipulate
		node.appendChild(n)
		node.cloneChild()
		node.contains(n)
		node.isEqualNode()
		node.isSameNode()
		node.insertBefore(newChild, referenceChild)
		node.replace(newChild, oldChild)
		node.removeChild(childNode)
	// properties
		node.nodeValue
		node.textContent
Document
	// top level global stuff
	// Traversal
		element = document.getElementById(id)
		HTMLCollection = document.getElementsByTagName(XMLTagName)
		element = document.querySelector(CSSSelector)
		NodeList = document.querySelectorAll(CSSSelector)
		nodeList = document.getElementsByName(ElementAttrName)
	// focus
		bool = document.hasFocus()
		document.activeElement
Element
	// DOM element stuff
	// size, attributes, classes, id, type, position, on page, etc.
	// Properties
		
		element.innerHTML
		element.getBoundingClientRect
		element.getClientRects
	// class
		DOMTokenList = element.classList
		DOMString = element.className
	// id
		element.id
	// Attribute
		element.getAttribute
		element.hasAttribute()
		element.hasAttributes()
		element.removeAttribute()
		element.setAttribute()
	// Traversal
		element.getElementsByClassName()
		element.getElementsByTagName()
		element.querySelector
		element.querySelectorAll