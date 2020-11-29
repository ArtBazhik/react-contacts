import { action, computed, makeObservable, observable } from "mobx"


class Users {
	users = [
		{
			id: 1,
			email: 'test@test.com',
			password: '12345',
			contactList: []
		}
	]

	get USERS() {
		return this.users
	}

	constructor(){
		makeObservable(this, {
			users: observable,
			USERS: computed,
			newContact: action,
			deleteContact: action,
			saveInfoContact: action,
		})
	}

	newContact(details) {
		let contact = details.contact
		let userId = details.userId
		this.users.find(user => {
			if(user.id === userId) {
				user.contactList.unshift({...contact, id: Date.now()})
			}
		})
	}
	deleteContact(details) {
		let userId = details.idUser
		let contactIndex = details.indexContact
		this.users.find(user => {
			if (user.id === userId) {
				user.contactList.splice(contactIndex, 1)
			}
		})
	}
	saveInfoContact(details) {
		let userId = details.IdUser
		let users = this.users
		let idContact = details.infoContact.id
		let nameContact = details.infoContact.name
		let phoneContact = details.infoContact.phone

		users.find(user => {
			if(user.id === userId) {
				user.contactList.find(contact => {
					if(contact.id === idContact) {
						if(nameContact.length) {
							contact.name = nameContact
						} 
						if(phoneContact.length) {
							contact.phone = phoneContact 
						} 
					}
				})
			}
		})
	}
}

export default new Users()
