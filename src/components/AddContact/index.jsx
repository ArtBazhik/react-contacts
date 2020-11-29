import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import style from './addContact.module.scss'
import store from '../../store/mainStore'

export const AddContact = observer((props) => {
	
	const userId = props.UserId
	const [contact, setContact] = useState({name: '', phone: ''})

	const addContact = (e) => {
		e.preventDefault()
		if(contact.name.length && contact.phone.length) {
			store.newContact({contact, userId})
			setContact({name: '', phone: ''})
		}
	}

	return(
		<form className={style.form} onSubmit={addContact}>
			<div className={style.inner}>
				<h3 className={style.title}>Создайте новый контакт</h3>
				<div className={style.groupForm}>
					<input 
						className={style.inputName} 
						type="text" id="name-contact" name="name-contact"
						onChange={e => setContact({...contact, name: e.target.value})}
						value={contact.name}
					/>
					<label className={style.labelName} htmlFor="name-contact">Имя:</label>
				</div>
				<div className={style.groupForm}>
					<input 
						className={style.inputPhone} 
						type="text" id="phone-contact" name="phone-contact"
						onChange={e => setContact({...contact, phone: e.target.value})}
						value={contact.phone}
					/>
					<label className={style.labelPhone} htmlFor="phone-contact">Телефон:</label>
				</div>
				<button className={style.createBtn}>создать</button>
			</div>
		</form>
	)
})