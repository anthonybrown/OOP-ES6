import { Person } from 'js/person.js'

export class Employee extends Person  {
	constructor (firstname, lastname, position) {
		super(firstname, lastname)
		this.position = position
	}

	get fullname () {
		return super.fullname + ', ' + this.position
	}

	//greet (name) {
		//return super.greet(name) + ', I\'m the ' + this.position
	//}
}
