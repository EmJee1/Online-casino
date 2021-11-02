import { useState } from 'react'
import EmailLogin from '@components/EmailLogin'
import EmailRegistration from '@components/EmailRegistration'
import GoogleLogin from '@components/GoogleLogin'

const Login = () => {
	const [login, setLogin] = useState(true)

	return (
		<div>
			<GoogleLogin />
			{login && <EmailLogin />}
			{!login && <EmailRegistration />}
			<button onClick={() => setLogin(prev => !prev)}>
				{login ? 'Make an account' : 'I already have an account'}
			</button>
		</div>
	)
}

export default Login
