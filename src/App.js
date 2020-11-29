import { observer } from "mobx-react-lite"
import {useState} from 'react'
import { useHistory } from "react-router-dom"

import { LoginForm } from "./components/LoginForm"
import { Contacts }  from "./pages/Contacts"
import mainStore from './store/mainStore'



export const  App = observer((props) => {

  const [login, setLogin] = useState({isAuth: false})
  const [userInfo, setUserInfo] = useState('')
  const [error, setError] = useState({text: ''})

  const history = useHistory()
  const users = mainStore.USERS

  const Login = details => {
    users.find(user => {
      if(user.email === details.email && user.password === details.password) {
        setLogin({...login, isAuth: true})
        setUserInfo(user)
        history.push(`/user/${user.id}`)
      } else setError({...error, text: 'Не правильный логин или пароль'})
    })
  }

  return (
    <div className="App">
      {(login.isAuth) ? (<Contacts UserInfo={userInfo}/>) : (<LoginForm Login={Login} Error={error}/>)}
    </div>
  );
})
