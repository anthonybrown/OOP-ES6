var result = document.getElementById('result')

function createPerson (firstName, lastName) {
	var person = {
		get firstName () {
			return firstName
		},
		get lastName () {
			return lastName
		},
		greet: function (name) {
			return 'Hello, ' + name + ' my name is ' + this.fullName
		}
	}

	Object.defineProperty(person, 'fullName', {
		get: function () { return this.firstName + ' ' + this.lastName },
		configurable: true
	})

	return person
}

function createEmployee(firstName, lastName, position) {
	var person = createPerson(firstName, lastName)
	//var personGreet = person.greet
	var fullNameDescriptor = Object.getOwnPropertyDescriptor(person, 'fullName')
	var fullNameGet = fullNameDescriptor.get.bind(person)

	Object.defineProperty(person, 'position', {
		get: function () { return position }
	})

	Object.defineProperty(person, 'fullName', {
		get: function () { return fullNameGet() + ', ' + this.position }
	})

	//person.greet = function (name) {
		//return personGreet(name) + ', ' + this.position
	//}

	return person
}

result.innerHTML += '<code><pre>function createPers (firstName, lastName) {<br>\
  var person = {<br>\
    get firstName () {<br>\
      return firstName<br>\
    },<br>\
    get lastName () {<br>\
      return lastName<br>\
    },<br>\
    greet: function (name) {<br>\
      return "Hello, " + name + " my namer is " + firstName + " " + lastName <br>\
    }<br>\
  }<br><br>\
    return person<br>\
}\<br><br>\
function createEmployee (firstName, lastName, position) {<br>\
 var person = createPerson(firstName, lastName)<br>\
 var personGreet = person.greet<br><br>\
 Object.defineProperty(person, "position", {<br>\
   get: function () { return position }<br>\
 })<br>\
 person.greet(name) {<br>\
  return personGreet(name) + ", this.position"<br>\
 }<br><br>\
 return person<br>\
}</pre></code><br>'

var hogarth = createEmployee('Hogarth', 'Smith', 'Manager')
var Bill = createEmployee('Bill', 'Warden', 'Project CTO')

result.innerHTML += hogarth.greet('Tony') + '<br>'
result.innerHTML += Bill.greet('Tony') + '<br>'

result.innerHTML += '<code><pre>\
function createPerson (firstName, lastName) {<br>\
  var person = {<br>\
    get firstName () {<br>\
      return firstName<br>\
    },<br>\
    get lastName () {<br>\
      return lastName<br>\
    },<br>\
    greet: function (name) {<br>\
      return "Hello, " + name + " my name is " + this.fullName<br>\
    }<br>\
  }<br><br>\
  Object.defineProperty(person, "fullName", {<br>\
    get: function () { return this.firstName + " " + this.lastName },<br>\
    configurable: true<br>\
  })<br><br>\
  return person<br>\
}<br><br>\
function createEmployee(firstName, lastName, position) {<br>\
  var person = createPerson(firstName, lastName)<br>\
  //var personGreet = person.greet<br>\
  var fullNameDescriptor = Object.getOwnPropertyDescriptor(person, "fullName")<br>\
  var fullNameGet = fullNameDescriptor.get.bind(person)<br><br>\
  Object.defineProperty(person, "position", {<br>\
    get: function () { return position }<br>\
  })<br><br>\
  Object.defineProperty(person, "fullName", {<br>\
    get: function () { return fullNameGet() + ", " + this.position }<br>\
  })<br><br>\
  //person.greet = function (name) {<br>\
    //return personGreet(name) + ", " + this.position<br>\
  //}<br><br>\
  return person<br>\
}<br>\
</pre></code>'

var pendamen = createEmployee('Pendamen', 'Johnson', 'Project Manager')
var nick = createEmployee('Nicolas', 'Zakas', 'Lead Developer')

result.innerHTML += pendamen.greet('Tony') + '<br>'
result.innerHTML += nick.greet('Tony') + '<br>'
