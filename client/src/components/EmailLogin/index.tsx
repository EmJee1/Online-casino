import { FormEvent, useState } from 'react'
import axios from 'axios'
import { LoginResponse, RequestError } from '../../models/responses'
import useAuthentication from '../../hooks/use-authentication'
import TextInput from '../TextInput'

const EmailLogin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { loginUser } = useAuthentication()

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()

		axios
			.post<LoginResponse>('/auth/email/login', { email, password })
			.then(({ data }) => loginUser(data.user))
			.catch((err: RequestError) => {
				if ('response' in err) {
					console.log(err.response?.data.errors)
				}
			})
	}

	return (
		<form onSubmit={onSubmit}>
			<TextInput
				label="Email"
				email
				value={email}
				updateState={setEmail}
			/>
			<TextInput
				password
				label="Password"
				value={password}
				updateState={setPassword}
			/>
			<input type="submit" value="Log in" />
		</form>
	)
}

export default EmailLogin
