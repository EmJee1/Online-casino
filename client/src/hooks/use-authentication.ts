import { useContext } from 'react'
import UserContext from '../context/user-context'
import { PersonalProfileResponse } from '../models/responses'

const useAuthentication = () => {
	const { setUser } = useContext(UserContext)

	const loginUser = (user: PersonalProfileResponse) => {
		setUser(user)
	}

	const updateUser = (user: Partial<PersonalProfileResponse>) => {
		setUser(prev => {
			if (!prev) {
				throw new Error('Cannot update unauthenticated user')
			}

			return { ...prev, ...user }
		})
	}

	const logoutUser = () => {
		setUser(null)
	}

	return { loginUser, updateUser, logoutUser }
}

export default useAuthentication
