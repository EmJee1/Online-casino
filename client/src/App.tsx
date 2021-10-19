import { Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
import useAuthentication from './hooks/use-authentication'
import UserContext, { UserStates } from './context/user-context'
import HomePage from './views/Home'
import Login from './views/auth/Login'
import './assets/style/index.scss'
import './util/axios'
import FinishAccount from './views/auth/FinishAccount'

const App = () => {
	const { user, userState } = useContext(UserContext)
	const { logoutUser } = useAuthentication()

	if (userState === UserStates.Unauthenticated) {
		return <Login />
	}

	if (userState === UserStates.PartlyRegistered) {
		return <FinishAccount />
	}

	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
				{user && <h1>{user.username} is logged in!</h1>}
				<button onClick={logoutUser}>Logout</button>
			</Route>
		</Switch>
	)
}

export default App
