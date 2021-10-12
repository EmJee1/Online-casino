import { FormEvent, useState } from 'react'
import axios from 'axios'
import { LoginResponse, RequestError } from '../../models/responses'
import useAuthentication from '../../hooks/use-authentication'

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
			<label htmlFor="email">Email</label>
			<input
				type="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<input type="submit" value="Log in" />
		</form>
	)
}

export default EmailLogin
