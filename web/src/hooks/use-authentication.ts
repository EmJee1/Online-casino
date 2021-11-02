import { useContext } from 'react'
import UserContext, { UserStates } from '@context/user-context'
import { PersonalProfileResponse } from '@models/responses'

const useAuthentication = () => {
	const { setUser, setUserState } = useContext(UserContext)

	const loginUser = (user: PersonalProfileResponse) => {
		setUser(user)

		if (user.completedRegistration) {
			setUserState(UserStates.Registered)
		} else {
			setUserState(UserStates.PartlyRegistered)
		}
	}

	const updateUser = (user: Partial<PersonalProfileResponse>) => {
		setUser(prev => {
			if (!prev) {
				throw new Error('Cannot update unauthenticated user')
			}

			return { ...prev, ...user }
		})

		setUserState(UserStates.Registered)
	}

	const logoutUser = () => {
		localStorage.removeItem('token')
		setUser(null)
		setUserState(UserStates.Unauthenticated)
	}

	return { loginUser, updateUser, logoutUser }
}

export default useAuthentication
