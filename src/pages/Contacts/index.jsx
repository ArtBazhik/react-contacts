import { Route, Switch } from "react-router-dom";

import { ContactLog } from "../../components/ContactLog";
import { Header } from "../../components/Header";

export const Contacts = (userInfo) => {

	const user = userInfo.UserInfo

	return (
		<>
			<Header Name={user.name}/>
			<Switch>
				<Route exact path='/user/:id' component={ContactLog}/>
			</Switch>
		</>
	)
}
