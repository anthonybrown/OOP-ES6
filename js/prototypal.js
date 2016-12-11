var result = document.getElementById('result')

var obj = {} // new Object()
console.log(obj.__proto__ === Object.prototype)

var hogarth = new Person('Hogarth')
console.log(hogarth.__proto__ === Person.prototype)

function Person (firstname) {
	this.firstname = firstname
}

Person.prototype.greet = function (name) {
	return 'Hello, ' + name + '. My name is ' + this.firstname
}

function Employee (firstname, position) {
	Person.call(this, firstname)
	this.position = position
}

Employee.prototype = Object.create(Person.prototype)

Employee.prototype.greet = function (name) {
	return Person.prototype.greet.call(this, name) + ', I am the ' + this.position
}

var jim = new Employee('Jim', 'Manager')

result.innerHTML += '<code><pre>\
var obj = {} // new Object() // new Object()<br>\
var hogarth = new Person("Hogarth")<br><br>\
console.log(obj.__proto__ == Object.prototype)<br>\
console.log(hogarth.__proto__ === Person.prototype)<br><br>\
function Person (firstname) {<br>\
  this.firstname = firstname<br>\
}<br></br>\
Person.prototype.greet = function (name) {<br>\
  return "Hello, " + name + ". My name is " + this.firstname<br>\
}<br>\
function Employee (firstname, position) {<br>\
  Person.call(this.firstname)<br>\
  this.position = position<br>\
}<br><br>\
Employee.prototype = Object.create(Person.prototype)<br><br>\
Employee.prototype.greet = function (name) {<br>\
  return Person.prototype.greet.call(this, name) + " " + this.position<br>\
}<br>\
var jim = new Employee("Jim", "Manager")<br>\
</pre></code>'

result.innerHTML += 'obj.__proto__ === Object.prototype -> '
result.innerHTML += obj.__proto__ === Object.prototype
result.innerHTML += '<br>'
result.innerHTML += jim.greet('Tony') + '<br>'

result.innerHTML += '<p>As you can see, JavaScript is a prototypical language</br>\
I really enjoy this kind of programming in JavaScript as the language is setup for<br>\
prototypes and prototype chains.The rule of thumb is keep your prototype chains short<br>\
to avoid performance hits.\</p>'
