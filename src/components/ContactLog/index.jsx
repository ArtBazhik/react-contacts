import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { AddContact } from '../AddContact'
import { LogItem } from './LogItem'
import store from '../../store/mainStore'
import style from './contactLog.module.scss'


export const ContactLog = observer((props) => {
	
	const [search, setSearch] = useState('')

	let contactList = []
	const users = store.USERS
	const idUser = +props.match.params.id
	users.map(item => {
		if(item.id === idUser) {
			contactList = item.contactList
		}
	})
	
	
	let delContact = indexContact => {
		store.deleteContact({indexContact, idUser})
	}

	const filteredContacts = contactList.filter(contact => {
		return contact.name.toLowerCase().includes(search.toLowerCase())
	})
	
	return(
		<section className={style.contacts}>
			<AddContact UserId={idUser}/>
			<h3 className={style.title}>
				Список ваших контактов
			</h3>
			<input 
				className={style.searchInput} placeholder="Поиск"  type="text" 
				onChange={e => setSearch(e.target.value)} 
			/>
			<ul className={style.list}>
			{
				(filteredContacts.length) ? 
				(filteredContacts.map((contact, index) => <LogItem delContact={delContact} key={contact.id} IdUser={idUser} IdContact={contact.id} Index={index} Phone={contact.phone} Name={contact.name} />)) : 
				(<p className={style.noContact}>У вас еще нет контактов</p>)
			}
			</ul>
		</section>
	)
})