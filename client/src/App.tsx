import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from './redux/store'
import Login from './views/Login'
import './util/axios'

const App = () => {
	const user = useSelector((state: RootState) => state.user)

	useEffect(() => console.log(user), [user])

	return (
		<div>
			{user && <h1>{user.username} is logged in!</h1>}
			<Login />
		</div>
	)
}

export default App
