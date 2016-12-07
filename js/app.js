// Boolean
// String
// Number
// Undefined
// Null
// Symbol

var result = document.getElementById('result')

var length = 'hello'.length
var length2 = new String('hello').length

result.innerHTML += "<code><pre>var length = 'hello'.length</pre></code>"
result.innerHTML += '<code><pre>var length2 = new String("hello").length </pre></code><br>'

console.log(length)
console.log(length2)
result.innerHTML += length
result.innerHTML += length2

console.log('typeof "hello" -> ', typeof 'hello')// string
result.innerHTML += '<code><pre>typeof "hello"</pre></code><br>'
result.innerHTML += 'typeof "hello" ->' + typeof 'hello' + '<br />'
console.log('typeof new String("hello") -> ', typeof new String('hello'))// object
result.innerHTML += '<code><pre>typeof new String("hello")</pre></code><br>'
result.innerHTML += 'typeof new String("hello") -> ' + typeof new String('hello') + '<br />'
console.log('typeof String("hello") -> ', typeof String('hello'))// string
result.innerHTML += '<code><pre>var length2 = new String("hello").length </pre></code><br>'
result.innerHTML += 'var length2 = new String("hello").length -> ' + typeof new String('hello')+'<br>'
console.log('typeof new String("hello").valueOf() -> ', typeof new String('hello').valueOf())// strting
result.innerHTML += '<code><pre>var length2 = new String("hello").valueOf() </pre></code><br>'
result.innerHTML += 'var length2 = new String("hello").valueOf() -> ' + typeof new String('hello').valueOf()+'<br>'

console.log('typeof 10 -> ', typeof 10) // number
result.innerHTML += '<code><pre>typeof 10</pre></code><br>'
result.innerHTML += 'typeof 10 -> ' + typeof 10 + '<br />'
console.log('typeof new Number(10) -> ', typeof new Number(10))// object
result.innerHTML += '<code><pre>typeof new Number(10)</pre></code><br>'
result.innerHTML += 'typeof new Number(10) -> ' + typeof new Number(10) + '<br />'
console.log('typeof new Number(10).valueOf() -> ', typeof new Number(10).valueOf())// number
result.innerHTML += '<code><pre>typeof new Number(10).valueOf()</pre></code><br>'
result.innerHTML += 'typeof new Number(10).valueOf() ->' + typeof new Number(10).valueOf + '<br />'

var hello = 'hello'
hello.foo = 'foo'

console.log(hello.foo);
result.innerHTML += '<code><pre>var hello = "hello";<br> hello.foo = "foo"</pre></code>'
result.innerHTML += 'hello.foo ' + hello.foo + '<br />'

var num = new Number(10)
var sum = 10 + num
console.log(sum)

result.innerHTML += '<code><pre>var num = new Number(10)<br>var sum = 10 + num</pre></code>'
result.innerHTML += 'sum = ' + sum + '<br />'

/* Once you have an object, you can dynamically add properties to that object */
result.innerHTML += 'Once you have an object, you can dynamically add properties to that object<br />'
num.foo = 'foo'
console.log(num.foo)
result.innerHTML += '<code><pre>num.foo = "foo"</pre></code>' + 'num.foo -> ' + num.foo + '<br />'

/**
	* Do not use wrapper objects in place
	* of primative values.
	* It can be dangerous to do so
	* Like this:
**/

var value = new Boolean(false)
/* In JavaScript objects are truthy values */
/* so, value won't be coerced into the Boolean value of false */
if (value) {
	console.log('var value = new Boolean(false); if (value) { return "bar" } ->','bar', ' normally, the behavior would have been to coerced the Boolean value to false, but since it\'s an object, it is truthy')
}

result.innerHTML += '<br><strong>In JavaScript, objects are truthy values, so value won\'t be coerced into the Boolean value of false</strong>'
result.innerHTML += '<code><pre>var value = new Boolean(false) <br /> if (value) {<br> &nbsp;&nbsp;return "bar" <br>&nbsp;}</pre></code><br>'

result.innerHTML += 'Use the primitive values instead of the \
wrapper objects. <br> Only in those edge cases where it only makes sense to do so.'

