var args = [1,2,3,4,5,6,7,8,9,10];

function get(arg1, arg2) {
	console.log("blah: "+arg1);
	if(arg1 > arg2) return arg1;
	else return arg2;
}
// result = Math.max.apply(null, args);
result = get.apply(null, args);
console.log(result);



function object(o) {
	function F(){}
	F.prototype = o;
	return new F();
}

function inheritPrototype(subType, superType) {
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function superType(name) {
	this.name = name;
	this.colors = [1,2,3];
}

superType.prototype.sayName = function() {
	alert(this.name);
}

function subType(name, age) {
	superType.call(this, name);
	this.age = age;
}

// subType.prototype = new superType();
// subType.prototype.constructor = subType;
inheritPrototype(subType, superType);

subType.prototype.sayAge = function() {
	alert(this.age);
}