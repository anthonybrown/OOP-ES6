export class Person {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname  = lastname
	}

	get fullname () {
		return this.firstname + ' ' + this.lastname
	}

	greet(name) {
		return 'Hello, ' + name + '. My name is ' + this.fullname
	}
}
