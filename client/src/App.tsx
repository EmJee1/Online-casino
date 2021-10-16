import { Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
import useAuthentication from './hooks/use-authentication'
import UserContext from './context/user-context'
import HomePage from './views/Home'
import Login from './views/Login'
import './assets/style/index.scss'
import './util/axios'

const App = () => {
	const { user } = useContext(UserContext)
	const { logoutUser } = useAuthentication()

	if (!user) {
		return <Login />
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
