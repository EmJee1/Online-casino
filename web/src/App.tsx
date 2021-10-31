import { Switch, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import PageLoader from './components/PageLoader'
import useAuthentication from './hooks/use-authentication'
import UserContext, { UserStates } from './context/user-context'
import { PersonalProfileResponse } from './models/responses'
import FinishAccount from './views/auth/FinishAccount'
import HomePage from './views/Home'
import Login from './views/auth/Login'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './assets/style/index.scss'
import './util/axios'

const App = () => {
	const [loading, setLoading] = useState(true)
	const { user, userState } = useContext(UserContext)
	const { logoutUser, loginUser } = useAuthentication()

	useEffect(() => {
		axios
			.get<PersonalProfileResponse>('/profile')
			.then(({ data }) => loginUser(data))
			.finally(() => setLoading(false))
	}, [])

	if (loading) {
		return <PageLoader />
	}

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
				{user && <h1>{user?.username} is logged in!</h1>}
				<button onClick={logoutUser}>Logout</button>
			</Route>
		</Switch>
	)
}

export default App
