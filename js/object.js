var result = document.getElementById('result')
var obj = new Object()

obj.firstName = 'Hogarth'
obj.greet = function () {
	return 'Howdy ' + this.firstName
}

console.log(obj.greet())
result.innerHTML += 'This was the way we use to create objects.<code><pre>\
var obj = new Object<br> obj.firstName = "Hogarth"<br> obj.greet = function () {\
<br> &nbsp;&nbsp;return "Howdy " + this.firstName <br>&nbsp;}</pre></code><br />'
result.innerHTML += obj.greet() + '<br />'

result.innerHTML += 'This is the way we write our objects today, Object literals<br>'

var obj2 = {
	firstName: 'Tony',
	lastName: 'Brown',
	greet: function () {
		return 'Howdy ' + this.firstName + ' ' + this.lastName
	}
}
result.innerHTML += '<code><pre>var obj2 = {<br> &nbsp;&nbsp; firstName: "Tony",<br>\
 &nbsp;&nbsp; lastName: "Brown",<br> &nbsp;&nbsp; greet: function () {<br> &nbsp;&nbsp;&nbsp; \
 return "Howdy " + this.firstName + " " + this.lastName<br />}}'
result.innerHTML += obj2.greet()
