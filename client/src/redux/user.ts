import { createSlice } from '@reduxjs/toolkit'
import { PersonalProfileResponse } from '../models/responses'

export const userSlice = createSlice({
	name: 'user',
	initialState: null as null | PersonalProfileResponse,
	reducers: {
		loginUser: (
			state,
			action: { payload: PersonalProfileResponse; type: string }
		) => action.payload,
		logoutUser: () => null,
		updateUser: (
			state,
			action: { payload: Partial<PersonalProfileResponse>; type: string }
		) => {
			if (state) {
				return { ...state, ...action.payload }
			} else {
				console.error('Cannot update empty user (user not logged in)')
			}
		},
	},
})

export const { loginUser, logoutUser, updateUser } = userSlice.actions

export default userSlice.reducer
