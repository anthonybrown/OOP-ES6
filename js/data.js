/* JavaScript Data Type */

var result = document.getElementById('result')

var Person2 = (function () {
	var firstNameSymbol = Symbol()
	var lastNameSymbol  = Symbol()

	function Person2 (firstName, lastName) {
		this[firstNameSymbol] = firstName
		this[lastNameSymbol]  = lastName
	}

	Person2.prototype.greet = function (name) {
		return 'Hello ' + name + ' my name is ' + this[firstNameSymbol] + ' ' + this[lastNameSymbol]
	}

	Object.defineProperty(Person2.prototype, 'firstName', {
		get: function () { return this[firstNameSymbol] }
	})

	Object.defineProperty(Person2.prototype, 'lastName', {
		get: function () { return this[lastNameSymbol] }
	})

	Person2.renamePerson = function (person, lastName) {
		person[lastNameSymbol] = lastName
	}

	return Person2
}())


function Person (firstName, lastName) {
	this.firstName = firstName
	this.lastName  = lastName
}

Person.prototype.greet = function (name) {
	return 'Hello ' + name + ' my name is ' + this.firstName + ' ' + this.lastName
}

result.innerHTML += '<small>Prototype\'s Rock!</small>'

result.innerHTML += '<code><pre>function Person (firstName, lastName) {<br>\
&nbsp;&nbsp; this.firstName = firstName<br>\
&nbsp;&nbsp; this.lastName = lastName<br>\
}<br>Person.prototype.greet = function (name) {<br>\
&nbsp;&nbsp; return "Hello " + name + " my name is " + this.firstName + " " + this.lastName<br>\
}<br><br>var obj = new Person("John", "Doe")<br>\
var obj2 = new Person("Jim", "Smith")\
<br>obj.greet === obj2.greet</pre></code>'

var obj = new Person('John', 'Doe')
result.innerHTML += obj.greet('Tony') + '<br>'

var obj2 = new Person('Jim', 'Smith')
result.innerHTML += obj2.greet('Tony') + '<br><br>'

result.innerHTML += 'obj.greet === obj2.greet<br>'
result.innerHTML += obj.greet === obj2.greet
result.innerHTML += '<br><hr />'

result.innerHTML += '<h2>Let\'s create some privacy with the ES6 Symbol, a primitive data-type.</h2><br>'

result.innerHTML += '<code><pre>var Person2 = (function () {<br>\
&nbsp;&nbsp;var firstNameSymbol = Symbol()<br>\
&nbsp;&nbsp;var lastNameSymbol  = Symbol()<br><br>\
&nbsp;&nbsp;function Person2 (firstName, lastName) {<br>\
&nbsp;&nbsp;  this[firstNameSymbol] = firstname<br>\
&nbsp;&nbsp;  this[lastNameSymbol]  = lastName<br>\
&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;Person2.prototype.greet = function (name) {<br>\
&nbsp;&nbsp;  return "Hello, " + name + " my name is " + this[firstNameSymbol] + this[lastNameSymbol]<br>  }<br>\
&nbsp;&nbsp; Object.defineProperty(Person2.prototype, "firstName", {<br>\
&nbsp;&nbsp;  get: function () { return this[firstNameSymbol] }<br>  &nbsp;})<br>\
&nbsp;&nbsp; Object.defineProperty(Person2.prototype, "lastName", {<br>\
&nbsp;&nbsp;  get: function () { return this[lastNameSymbol] }<br>  &nbsp;})<br>\
&nbsp;&nbsp;return Person2<br>}())</pre></code>'


var person = new Person2('Jane', 'Doe')
result.innerHTML += person.greet('Tony') + '<br>'

result.innerHTML += 'Now we have true privacy by using the Symbol() data type'


