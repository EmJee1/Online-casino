import axios from 'axios'
import {
	GoogleLogin as LoginWithGoogle,
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from 'react-google-login'
import useAuthentication from '../../hooks/use-authentication'
import { LoginResponse, RequestError } from '../../models/responses'

const GoogleLogin = () => {
	const { loginUser } = useAuthentication()

	const handleLogin = async (
		googleData: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		if (!('tokenId' in googleData)) {
			// TODO: show error message to user
			return console.error('Google login needs an online response')
		}

		axios
			.post<LoginResponse>('/auth/google', {
				idToken: googleData.tokenId,
			})
			.then(({ data }) => loginUser(data.user))
			.catch((err: RequestError) => {
				if ('response' in err) {
					console.log(err.response?.data.errors)
				}
			})
	}

	const handleFailure = (err: Error) => {
		// TODO: show error message to user
		return console.error('Google login failure:', err)
	}

	return (
		<LoginWithGoogle
			clientId="798849429177-aa40t54b9mti1ejkrjnh7a1v6861q3o2.apps.googleusercontent.com"
			buttonText="Sign in with Google"
			onSuccess={handleLogin}
			onFailure={handleFailure}
		/>
	)
}

export default GoogleLogin
