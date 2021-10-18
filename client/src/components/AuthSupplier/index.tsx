import { useState } from 'react'
import { UserContextProvider, UserStates } from '../../context/user-context'
import { PersonalProfileResponse } from '../../models/responses'

interface AuthSupplierInterface {
	children: JSX.Element | JSX.Element[]
}

const AuthSupplier = ({ children }: AuthSupplierInterface) => {
	const [user, setUser] = useState<PersonalProfileResponse | null>(null)
	const [userState, setUserState] = useState<UserStates>(
		UserStates.Unauthenticated
	)

	return (
		<UserContextProvider value={{ user, setUser, userState, setUserState }}>
			{children}
		</UserContextProvider>
	)
}

export default AuthSupplier
