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

result.innerHTML += '<h3>Class Inheritance</h3><hr />'
result.innerHTML += '<p>Classes are sweet to use, they are familiar.<br>\
Class based inheritance (in JavaScript) is just sugar for prototypal inheritance,<br>\
and because it\'s prototypal inheritance, it\'s true inheritance.</p>'

result.innerHTML += '<p>Here we will use 2 files, the person.js and employee.js</p>'
result.innerHTML += '<p>Here is the Person class:</p>'

result.innerHTML += '<code><pre>export class Person {<br>\
  constructor (firstname, lastname) {<br>\
    this.firstname = firstname<br>\
    this.lastname  = lastname<br>\
  }<br><br>\
  get fullname () {<br>\
    return this.firstname + " " + this.lastname<br>\
  }<br><br>\
  greet(name) {<br>\
    return "Hello, " + name + ". My name is " + this.fullname<br>\
  }<br>\
}\
</pre></code>'
result.innerHTML += '<p>Here is our Employee class:</p>'
result.innerHTML += '<code><pre>import { Person } from "js/person.js"<br><br>\
export class Employee extends Person  {<br>\
  constructor (firstname, lastname, position) {<br>\
    super(firstname, lastname)<br>\
    this.position = position<br>\
  }<br><br>\
  get fullname () {<br>\
    return super.fullname + ", " + this.position<br>\
  }<br><br>\
  \/\/we can use the super keyword to add a fullname method.<br>\
  \/\/greet (name) {<br>\
    \/\/return super.greet(name) + ", I\'m the " + this.position<br>\
  \/\/}<br>\
}\
</pre></code>'

result.innerHTML += '<p>I will use the import statement to use the classes like this</p>'
result.innerHTML += '<code><pre>import { Employee} from "js/employee.js"<br><br>\
let person = new Employee("Mike", "Jones", "manager")<br>\
console.log(person.greet("Tony"))<br>\
result.innerHTML += person.greet("Anthony")<br>\
</pre></code>'

result.innerHTML += '<p>As you can see, this is far more superior<br>\
than the code we had to write in in ES5</p>'
