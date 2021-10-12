import { useState } from 'react'
import { UserContextProvider } from '../../context/user-context'
import { PersonalProfileResponse } from '../../models/responses'

interface AuthSupplierInterface {
	children: JSX.Element | JSX.Element[]
}

const AuthSupplier = ({ children }: AuthSupplierInterface) => {
	const [user, setUser] = useState<PersonalProfileResponse | null>(null)

	return (
		<UserContextProvider value={{ user, setUser }}>
			{children}
		</UserContextProvider>
	)
}

export default AuthSupplier
