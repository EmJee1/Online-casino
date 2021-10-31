import { FormEvent, useState } from 'react'
import axios from 'axios'
import { FinishProfileResponse, RequestError } from '../../models/responses'
import useAuthentication from '../../hooks/use-authentication'
import TextInput from '../../components/TextInput'

const FinishAccount = () => {
	const [username, setUsername] = useState('')
	const { loginUser } = useAuthentication()

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()

		axios
			.post<FinishProfileResponse>('/auth/username/register-username', {
				username,
			})
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
				label="Username"
				value={username}
				updateState={setUsername}
			/>
		</form>
	)
}

export default FinishAccount
