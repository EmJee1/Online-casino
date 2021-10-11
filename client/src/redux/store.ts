import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as _useDispatch } from 'react-redux'
import userReducer from './user'

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDispatch = () => _useDispatch<AppDispatch>()
