/* 
	block comment
	can break because of regexes and certain strings allowing "* /"; 
	stick to // for comments if you can 
*/
// comment

// name = [a-zA-Z][a-zA-Z0-9_]*
// number = #.#[eE][+-]#
		// 64 bit, always
		// stay away from bitwise operators
			// they convert Number -> Int, apply operation -> Number; its slow
	// 1 + 1 = 2 (note that both MUST be numbers, otherwise it will concat)
	// 4 / 2 = 2  (/, *, % will autoconvert to number)
	// 2 * 5 = 10
	// 8 % 3 = 2
	// NaN: Not a Number
		// always returns false
		// isNaN(x) to check if NaN
		// NaN propagates operations
		// typeof NaN = 'number'
	// Infinity: any number beyond what Number can represent
		// Infinity propogates
		// 2 / 0 = Infinity
		// -2 / 0 = -Infinity
		// typeof Infinity = 'number'
	// num.toString(base)

// don't use primitive wrappers
// all they do is wrap the object and valueOf() = value


var s = "abc";
s = '';

// statement = 1 line doing something
var varName = "expression";
var varName2;

function examples() {
	var b1 = false; // boolean
	var o1 = {
		'a' : 1,
		'b' : 2
	}
	var arr1 = [1,2,3,4,5];
	var num1 = 10;

	if(b1) {
		console.log("if");
	}
	else if(!b1) {
		console.log("if else");
	}
	else {
		console.log("else");
	}
	var shortcutIf = (true) ? "true Value" : "false value";

	var i;
	for(i in o1) {
		console.log(i);
	}
	for(i = 0; i < arr1.length; i++) {
		console.log(arr1[i]);
	}

	var condition = true;
	while(condition) {
		console.log("inside while loop");
		break;
	}

	do {
		console.log("inside while loop");
		break;
	} while(condition);

	switch(num1) {
		case 1:
			console.log(num);
			break;
		default:
			console.log("blah");
	}

	try {
		console.log("blah");
		throw {
			'type' : 'blahError',
			'msg' : 'blah error'
		};
		throw "string";
		throw 500;
		throw false;
		throw EvalError();
		throw RangeError();
		throw ReferenceError();
		throw SyntaxError();
		throw TypeError();
		throw URIError();
	} 
	catch(e) {
		if(typeof e === 'object') console.log(e.type);
		else if(typeof e === 'Number') console.log(e);
	}
	finally {

	}

	delete arr1[0];
	delete num1;

	return;
	return 1;
}

function literals() {
	var b = new Boolean(false);
	b = false;

	var x = new Number(500);
	x = 1;
	x = 1.0;
	x = 1.0e5;    // 10000
	x = 1e-5;     // 0.00001
	x = 01234567; // octal
	x = 0xFF;     // hexadecimal

	var s = new String("blah");
	s = "s";
	s = 's';

	var obj = new Object();
	obj = {};
	obj = {
		blah: 'blah',
		'blah': 'blah2'
	};

	var arr = new Array();
	arr = [];
	arr = [1,2,3,4,5];

	var f = function() {
		console.log("blah");
	}

	var r = new Regex();
	r = /[0-9A-Za-z]+/gim;
}

function objects() {
	var empty = {};
	var obj = {
		"name": "blah",
		"invalid-obj": "blah2",
		"b": {
			"c": 2
		}
	};

	var s = '';
	s = obj.name;
	s = obj[name];
	s = obj['invalid-obj'];
	s = (obj.b && s.b.c) ? s.b.c : "default";

	// Traversal
	// for ... in loop; object & prototype chain
	Object.keys(obj);
	Object.getOwnPropertyNames(obj);
}

function constructorCat(meow) {
	this.meow = meow;
}
var cat = new constructorCat("meow");

var fCat = function(meow1) {
	var meow = meow1;
}
var cat2 = fCat("meowww");

var cat3 = Object.create(cat);


var o = {
	a: 7,
	get b() {
		return this.a + 1;
	},
	set c(x) {
		this.a = x /2;
	}
}


// Object 
	// constructor properties
		Object.length = 1
		Object.prototype
	// constructor methods
		target = Object.assign(target, src1, src2, ...)                         //  copies references of src properties to target; not prototype
		obj = Object.create(targetPrototype, extraPropertiesObj)                //  create new object w/ extraPropertiesObj properties & prototype of targetPrototype
		obj = Object.defineProperty(obj, 'propertyName', descriptor)            //  add or change property of the object
			descriptor = {
				configurable: false,    // if property can be deleted, type changed
				enumerable: false,      // shows up in for...in
				value: undefined,       // stored value; can be any valid value
				writable: false,        // if value can be changed
				get: undefined,         // getter function
				set: undefined          // setter function
			}
		obj = Object.defineProperties(obj, props)
			props = {
				'propertyName': descriptor,
				'propertyName2': descriptor
			}
		result = Object.entries(obj)                                            //  returns property/value pair array of object; no prototypes
		obj = Object.freeze(obj)                                                //  set obj to not add new properties, cannot change, remove existing properties
		descriptor = Object.getOwnPropertyDescriptor(obj, 'propertyName')       //  returns descriptor object for property
		props = Object.getOwnPropertyDescriptors(obj)                           //  returns descriptor objects for ALL properties; no prototypes
		propertyNamesArr = Object.getOwnPropertyNames(obj)                      //  gets all the property names of obj; no prototypes
		symbolPropertiesArr = Object.getOwnPropertySymbols(obj)                 //  returns all symbol properties
		objPrototype = Object.getPrototypeOf(obj)                               //  get obj prototype. same as obj.[[Prototype]] === obj.__proto__
		isSameValue = Object.is(obj1, obj2)                                     //  is both values the same value? not the same as ==, ===
			undefined, null, true, false, strings, object, numbers (+0, -0, NaN)
		boolCanBeExtended = Object.isExtensible(obj)                            //  if properties can be added / modified in object. 
		boolIsFrozen = Object.isFrozen(obj)                                     //  is object frozen
		boolIsSealed = Object.isSealed(obj)                                     //  is object sealed
		enumKeysArr = Object.keys(obj)                                          //  get iterable keys; no prototypes
		obj = Object.preventExtensions(obj)                                     //  set obj to not add new properties
		obj = Object.seal(obj)                                                  //  set obj to not add new properties & set all existing properties to non-configurable (can change values, but not types)
		obj = Object.setPrototypeOf(objPrototype)                               //  set obj's prototype
		valuesArr = Object.values(obj)                                          //  get obj values
	// instances & prototype object
		// properties
			obj.prototype.constructor                                           // function to create object's prototype
			obj.prototype.__proto__*                                            // internal prototype; use Object.getPrototypeOf(obj) instead
		// methods
			bool = obj.hasOwnProperty('propertyName')                           // whether obj has property, not in prototype chain
			bool = obj.isPrototypeOf(obj2)                                      // whether obj.prototype is part of obj2's prototype chain
			bool = obj.propertyIsEnumerable('propertyName')                     // is property enumerable by for...in loop; not prototype
			obj.toLocaleString()
			obj.toString()
			primitive = obj.valueOf()                                           // get primitive value of object
	// Notes
		// for...in loops thru ALL enum properties, including prototype chain



// Function
// Function Prototype object
	// Properties
		Function.length                                                         // # args expected by function
		Function.name                                                           // name of function
		Function.prototype.constructor                                          // construction function, creates object's prototype
	// Methods
		result = func.apply(thisArg, [argsArr])                                 // call function with arguments in argsArr & this context; calls it in a chain
		newFunc = func.bind(thisArg, preArg1, preArg2, ...)                     // creates new function with thisArg context & can have partially filled arguments
		result = func.call(thisArg, arg1, arg2, ...)                            // call function with arguments & this context
		stringRepresent = func.toString()                                       // string representation of function



// arguments
	arguments.callee
	arguments.length
	arguments[i]



Array
	// properties
		arr.length
		arr.prototype
	// Methods
		newArr = Array.from(arrayLike)                                          // creates array from array-like (has length & indexed elements)
		Array.isArray(arr)
		arr = Array.of(element1, element2, element3, ...)                       // creates new array with elements in it
	// Instances
		// properties
			arr.constructor
			arr.length
		// methods
			arr = arr.copyWithin(targetPos, start*, end*)                       // copy subarray[start, end] to arr[targetPos]
			arr = arr.fill(value, start*, end*)                                 // replaces arr[start, end] with value
			lastEle = arr.pop()                                                 // get last element in array
			newLength = arr.push(e1, e2, e3, ...)                               // add elements to end of array
			arr = arr.reverse()                                                 // reverse array
			firstEle = arr.shift()                                              // pop first element
			arr = arr.sort()
			deletedItemsArr = arr.splice(start, deleteCount, e1, e2, ...)       // at position start, delete [deleteCount] # elements, and add items there.
			newLength = arr.unshift(e1, e2, e3, ...)                            // add elements to start of array
		// accessors
			newArr = arr.concat(val1, arr2, val3, ...)                          // adds values of arguments into array
			pos = arr.indexOf(ele, fromIndex*)                                  // find first instance of ele in arr
			str = arr.join(separatorStr)                                        // returns string where all elements + "separator"
			pos = arr.lastIndexOf(ele, fromIndex*)                              // find first instance of ele in arr, reverse direction
			newArr = arr.slice(start*, end*)                                    // shallow copy subset array[start, end-1]
			arr.toString()
			arr.toLocaleString()
		// iteration methods
			keyValArrIter = arr.entries()
			allElePass = arr.every(function(element, index, array){}, thisArg*) // if all elements in array pass
			newArr = arr.filter(function(element, index, array){}, thisArg*)    // subset array of elements passing test
			value = arr.find(function(element, index, array){}, thisArg*)       // returns an element that passed the test
			index = arr.findIndex(function(element, index, array){}, thisArg*)  // returns element index that passed the test
			undefined = arr.forEach(function(element){}, thisArg*)              // calls function on each element in array
			keyArrIter = arr.keys()
			newArr = arr.map(function(element, index, array){}, thisArg*)       // apply function to all elements, store results in newArr
			result = arr.reduce(function(accumulator, curr, index, array){}, initValue)        // apply function from 0..N, rolling results
			result = arr.reduceRight(function(accumulator, curr, index, array){}, initValue)   // reduce but N..0
			onePassed = arr.some(function(element, index, array){}, thisArg*)   // if one element passed test
			valArrIter = arr.values()

// String
	// Properties
		String.prototype
	// methods
		str = String.fromCharCode(num1, num2, num3, ...)                        // create string from sequence of unicode
	// instances
		// properties
			str.constructor
			str.length
			str[i]
		// methods
			str.charAt()
			str.charCodeAt()
			str.codePointAt()
			str.concat()
			str.includes()
			str.endsWith()
			str.indexOf()
			str.lastIndexOf()
			str.localeCompare()
			str.match()
			str.normalize()
			str.padEnd()
			str.padStart()
			str.repeat()
			newStr = str.replace(regexp|substrPattern, newSubstr|func)
			index = str.search(regexp)
			newStr = str.slice(start, end*)                                     // get subsection of array; handles negative pos
			str.split()
			str.startsWith()
			str.substr(start, length)
			newStr = str.substring(start, end*)                                 // get substring
			str.toLocaleLowerCase()
			str.toLocaleUpperCase()
			str.toLowerCase()
			str.toUpperCase()
			str.toString()
			str.trim()
			str.valueOf()

// RegExp
	// properties
		regex.lastIndex
	// prototype properties
		regex.constructor
		regex.flags
		regex.global
		regex.ignoreCase
		regex.multiline
		regex.source
		regex.sticky
		regex.unicode
	// prototype methods
		resultArr = regex.exec(str)
			resultArr = {
				0: matching strings,
				1..n: parenthesized substring matches,
				index: index,
				input: str
			}
		isAMatch = regex.test(str)
	// methods that use regexs
	str.match
	str.search
	str.replace
	str.split

// JSON
	JSON.parse(str)
	JSON.stringify(obj)

// events


Math
Number
Date

Prototype
Inheritance
Promise

// DOM
// Document
// Elements
// Attributes
// Events
// Style












// creation/cloning
obj = Object.assign(obj, parent1, parent2, ...) // take properties from other objects
clone = Object.create(parent, extraPropertiesObject)
obj.prototype.constructor

// property
obj.hasOwnProperty()
obj.propertyIsEnumerable()
Object.defineProperty()
Object.defineProperties()
Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()

// prototypes
Object.setPrototypeOf()
obj.isPrototypeOf()

// get key/values
Object.entries(o)
Object.keys(o)
Object.values(o)

// equals
object.is(o1, o2)

// value
obj.toLocaleString()
obj.toString()
primitive = obj.valueOf()

// restrictions
Object.preventExtensions(o)
Object.freeze(o)
Object.seal(o)
Object.isExtensible(o)
Object.isFrozen(o)
Object.isSealed(o)