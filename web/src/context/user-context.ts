import { createContext, Dispatch, SetStateAction } from 'react'
import { PersonalProfileResponse } from '@models/responses'

export enum UserStates {
	Unauthenticated = 'UNAUTHENTICATED',
	PartlyRegistered = 'PARTLY_REGISTERED',
	Registered = 'REGISTERED',
}

interface IUserContext {
	user: PersonalProfileResponse | null
	setUser: Dispatch<SetStateAction<PersonalProfileResponse | null>>
	userState: UserStates
	setUserState: Dispatch<SetStateAction<UserStates>>
}

// @ts-ignore
const UserContext = createContext<IUserContext>()

export const UserContextProvider = UserContext.Provider
export default UserContext
