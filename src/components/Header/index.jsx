import style from './header.module.scss'

export const Header = ({Name}) => {

	return(
		<header className={style.header}>
			<h3 className={style.nameApp}>Журнал контактов</h3>
		</header>
	)
}