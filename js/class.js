var result = document.getElementById('result')
result.innerHTML += '<small>JavaScript has a class construct!</small><br />'

result.innerHTML += '<code><pre>class Person {<br>\
&nbsp;&nbsp; constructor(firstName, lastName) {<br>\
&nbsp;&nbsp;   this.firstName = firstName<br>\
&nbsp;&nbsp;   this.lastName  = lastName<br />\
 &nbsp;&nbsp;}<br><br>&nbsp;&nbsp; greet (name) {<br>\
&nbsp;&nbsp;   return `Hello ${name} my name is ${this.firstName} ${this.lastName}`<br>\
&nbsp;&nbsp;}<br>}<br><br>\
var obj = new Person("John","Doen")<br>\
obj.greet("Tony")<br><br>\
var obj2 = new Person("Jim","Smith")<br>\
obj2.greet("Tony")<br><br>obj instanceof Person</pre></code>'

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName  = lastName
	}
	greet (name) {
		return `Hello ${name} my name is ${this.firstName} ${this.lastName}`
	}
}


var obj	 = new Person('John', 'Doe')
var obj2 = new Person('Jim', 'Smith')

result.innerHTML += obj.greet('Tony') + '<br />'
result.innerHTML += obj2.greet('Tony') + '<br />'
result.innerHTML += 'obj instanceof Person: '
result.innerHTML += obj instanceof Person

result.innerHTML += '<h3>The Class construct is just syntactic sugar over what we wrote in the last lesson.</h3>'
