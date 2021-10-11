import { FormEvent, useState } from 'react'
import axios from 'axios'
import { LoginResponse, RequestError } from '../../models/responses'
import { useDispatch } from '../../redux/store'
import { loginUser } from '../../redux/user'

const EmailLogin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault()

		await axios
			.post<LoginResponse>('/auth/email/login', { email, password })
			.then(({ data }) => dispatch(loginUser(data.user)))
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
