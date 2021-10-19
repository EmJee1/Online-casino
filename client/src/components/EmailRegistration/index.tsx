import { FormEvent, useContext, useState } from 'react'
import axios from 'axios'
import UserContext, { UserStates } from '../../context/user-context'
import { RequestError } from '../../models/responses'
import TextInput from '../TextInput'

const EmailRegistration = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const { setUserState } = useContext(UserContext)

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()

		axios
			.post('/auth/email/register', { email, password })
			.then(() => setUserState(UserStates.PartlyRegistered))
			.catch((err: RequestError) => {
				if ('response' in err) {
					console.log(err.response?.data.errors)
				}
			})
	}

	return (
		<form onSubmit={onSubmit}>
			<TextInput
				email
				label="Email"
				value={email}
				updateState={setEmail}
			/>
			<TextInput
				password
				label="Password"
				value={password}
				updateState={setPassword}
			/>
			<TextInput
				password
				label="Repeat password"
				value={repeatPassword}
				updateState={setRepeatPassword}
			/>
			<input type="submit" value="Register" />
		</form>
	)
}

export default EmailRegistration
