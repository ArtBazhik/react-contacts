import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import store from '../../../store/mainStore'
import style from './logItem.module.scss'

export const LogItem = observer(({Phone, Name, delContact, Index, IdContact, IdUser}) => {

	const [infoContact, setInfoContact] = useState({name: '', phone: '', id: ''})
	const [isRedact, setIsRedact] = useState({redactContact: false})

	let readactContact = () => {
		setIsRedact({redactContact: true})
	}
	let saveInfo = () => {
		store.saveInfoContact({infoContact, IdUser})
		setIsRedact({redactContact: false})
	}
	return (
		<li className={style.item}>
			{
				isRedact.redactContact ? 
				<input className={style.redactInput} type="text" placeholder={Name} onChange={(e) => {setInfoContact({...infoContact, name: e.target.value, id: IdContact})}}/> : 
				<span className={style.itemName}>{Name}</span> 
			}
			{
				isRedact.redactContact ? 
				<input className={style.redactInput} type="text" placeholder={Phone} onChange={(e) => {setInfoContact({...infoContact, phone: e.target.value, id: IdContact})}}/> : 
				<span className={style.itemPhone}>{Phone}</span>
			}
			
			<div className={style.groupBtn}>
				{
					isRedact.redactContact ? 
					<button className={style.cancelRedact} onClick={() => setIsRedact({redactContact: false})}>отмена</button> : 
					<button onClick={() => delContact(Index)} className={style.deleteBtn}><span>+</span></button>
				}
				{
					isRedact.redactContact ?
					<button onClick={saveInfo} className={style.saveRedact}>сохранить</button> :
					<button onClick={readactContact} className={style.redactsBtn}>изменить</button>
				}
			</div>
		</li>
	)
})