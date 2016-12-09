/* The Factory Pattern in JavaScript */
var result = document.getElementById('result')

function createPerson (firstName, lastName) {

	var person = {
		/* use a getter so they are read only */
		get firstName() {
			return firstName
		},
		get lastName() {
			return lastName
		},
		/* creating the method in the object wastes memory */
		greet: function (name) {
			return 'Hello ' + name + ', my name is ' + firstName + ' ' + lastName
		}
	}

	return person
}

result.innerHTML += '<code><pre>function createPerson (firstName, lastName) {<br>\
&nbsp;&nbsp; var person = { <br>&nbsp;&nbsp;&nbsp;  get firstName() {<br> \
&nbsp;&nbsp;&nbsp;   return firstName <br>&nbsp;&nbsp;&nbsp;  },<br>&nbsp;&nbsp;&nbsp;&nbsp;\
get lastName() {<br> &nbsp;&nbsp;&nbsp;&nbsp;  return lastName <br>\
&nbsp;&nbsp;  },<br> &nbsp;  greet: function (name) {<br>\
&nbsp; &nbsp;   return "Hello " + name + ", my name is " + firstName + " " + lastName<br>\
&nbsp;&nbsp;  }<br>&nbsp; }<br> &nbsp;&nbsp;return person<br>}<br>\
var obj = createPerson("John", "Doe")<br>obj.greet("Tony")<br>\
var obj2 = createPerson("Jim","Smith")<br>obj.greet("Tony")<br></pre></code>'

//function createPerson (firstName, lastName) {
	//var person = {
		//firstName,
		//lastName,
		//greet: function (name) {
			//return 'Hello ' + name + ', my name is ' + this.firstName + ' ' + this.lastName
		//}
	//}
	//return person
//}

var obj = createPerson('John', 'Doe')
result.innerHTML += obj.greet('Tony') + '<br />'

var obj2 = createPerson('Jim', 'Smith')
result.innerHTML += obj2.greet('Tony') + '<br />'

/* This is not a good way to create objects, you want to keep your code DRY */
//var obj = {
	//firstName: 'John',
	//greet: function (name) {
		//return 'Hello ' + name + ', my name is ' + this.firstName
	//}
//}

//var obj2 = {
	//firstName: 'Joe',
	//greet: function(name) {
		//return 'Hello ' + name + ', my name is ' + this.firstName
	//}
//}
//result.innerHTML += obj.greet('Tony') + '<br>'

//result.innerHTML += obj2.greet('Tony') + '<br>'

