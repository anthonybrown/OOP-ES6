var result = document.getElementById('result')

result.innerHTML += '<h3>Using a weak map</h3>'
result.innerHTML += '<small>a weak map is a storage device for key value pairs\
where the key is an object</small><br>'

var Person = (function () {
	var map = new WeakMap()

	function Person (firstName, lastName) {
		map.set(this, {
			firstName: firstName,
			lastName : lastName
		})
	}

	Person.prototype.greet = function (name) {
		return 'Hello, ' + name + ' my name is ' + map.get(this).firstName + ' ' +
			map.get(this).lastName
	}

	Object.defineProperty(Person.prototype, 'firstName', {
		get: function () { return map.get(this).firstName }
	})

	Object.defineProperty(Person.prototype, 'lastName', {
		get: function () { return map.get(this).lastName }
	})

	Person.renamePerson = function (person, lastName) {
		map.get(this).lastName = lastName
	}

	return Person
}())

var obj = new Person('Tom', 'Jones')
console.log(obj.greet('Tony'));
obj.greet('Tony')

result.innerHTML += '<code><pre>var Person = (function () {<br>\
 var map = new WeakMap()<br><br>\
 function Person (firstName, lastName) {<br>\
   map.set(this, {<br>\
   firstName: firstName,<br>\
   lastName : lastName<br>\
 })<br>\
}<br><br>\
Person.prototype.greet = function (name) {<br>\
  return "Hello, " + name + " my name is " + map.get(this).firstName + " " +\
    map.get(this).lastName<br>\
}<br><br>\
Object.defineProperty(Person.prototype, "firstName", {<br>\
  get: function () { return map.get(this).firstName }<br>\
})<br><br>\
Object.defineProperty(Person.prototype, "lastName", {<br>\
  get: function () { return map.get(this).lastName }<br>\
})<br><br>\
Person.renamePerson = function (person, lastName) {<br>\
  map.get(this).lastName = lastName<br>\
}<br><br>\
  return Person<br>\
}())<br><br>\
var obj = new Person("Tom", "Jones")<br>\
console.log(obj.greet("Tony"))<br>\
obj.greet("Tony")<br>\
</pre></code>'

result.innerHTML += '<h3>' + obj.greet('Tony') + '</h3>'

result.innerHTML += 'Using weak maps is a great way of \
getting privacy today.'

