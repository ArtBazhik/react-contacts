import { useState } from "react"

import style from './loginForm.module.scss'

export const LoginForm = ({Login, Error}) => {

	const [details, setDetails] = useState({email: '', password: ''})

	const submitHandler = (e) => {
		e.preventDefault()
		Login(details)
	}

	return(
		<form className={style.form} onSubmit={submitHandler}>
			<div className={style.inner}>
				<h2 className={style.title}>Вход</h2>
				{Error.text ? (<p className={style.error}>{Error.text}</p>) : ''}
				<div className={style.group}>
					<input 
						className={style.input} type="email" name="email" id="email" 
						onChange={e => setDetails({...details, email: e.target.value})}
						value={details.email}
					/>
					<label className={style.labelEmail} htmlFor="email">Emal:</label>
				</div>
				<div className={style.group}>
					<input 
						className={style.input} type="password"	name="password" id="password"
						onChange={e => setDetails({...details, password: e.target.value})}
						value={details.password}
					/>
					<label className={style.labelPassword} htmlFor="password">Password:</label>
				</div>
				<button className={style.loginBtn}>войти</button>
			</div>
		</form>
	)
}