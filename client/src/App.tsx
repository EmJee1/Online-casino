import { useContext } from 'react'
import UserContext from './context/user-context'
import Login from './views/Login'
import './util/axios'
import useAuthentication from './hooks/use-authentication'

const App = () => {
	const { user } = useContext(UserContext)
	const { logoutUser } = useAuthentication()

	if (!user) {
		return <Login />
	}

	return (
		<div>
			{user && <h1>{user.username} is logged in!</h1>}
			<button onClick={logoutUser}>Logout</button>
		</div>
	)
}

export default App
