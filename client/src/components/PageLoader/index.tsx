import Loader from 'react-loader-spinner'

const PageLoader = () => {
	return (
		<div className="h-screen w-screen grid place-items-center">
			<Loader type="Audio" width="14vw" height="14vh" />
		</div>
	)
}

export default PageLoader
