import { createContext, Dispatch, SetStateAction } from 'react'
import { PersonalProfileResponse } from '../models/responses'

interface IUserContext {
	user: PersonalProfileResponse | null
	setUser: Dispatch<SetStateAction<PersonalProfileResponse | null>>
}

// @ts-ignore
const UserContext = createContext<IUserContext>()

export const UserContextProvider = UserContext.Provider
export default UserContext
