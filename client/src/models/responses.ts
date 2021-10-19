import { AxiosError, AxiosResponse } from 'axios'

export interface PersonalProfileResponse {
	id: number
	email: string
	username: string
	avatar: string
	completedRegistration: boolean
}

export interface LoginResponse {
	token: string
	user: PersonalProfileResponse
}

export interface FinishProfileResponse {
	user: PersonalProfileResponse
}

export interface ErrorBodyResponse {
	errors: string[]
}

export interface CustomAxiosError extends AxiosError {
	response?: AxiosResponse<ErrorBodyResponse>
}

export type RequestError = Error | CustomAxiosError
