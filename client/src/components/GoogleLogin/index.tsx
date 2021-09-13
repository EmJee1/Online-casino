import axios from 'axios'
import {
	GoogleLogin,
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from 'react-google-login'

const LoginWithGoogle = () => {
	const handleLogin = async (
		googleData: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		if (!('tokenId' in googleData)) {
			// TODO: show error message to user
			return console.error('Google login needs an online response')
		}

		axios.post('/auth/google', { idToken: googleData.tokenId })
	}

	const handleFailure = (err: string) => {
		// TODO: show error message to user
		return console.error('Google login failure:', err)
	}

	return (
		<GoogleLogin
			clientId="798849429177-aa40t54b9mti1ejkrjnh7a1v6861q3o2.apps.googleusercontent.com"
			buttonText="Sign in with Google"
			onSuccess={handleLogin}
			onFailure={handleFailure}
		/>
	)
}

export default LoginWithGoogle
