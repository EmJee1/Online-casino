import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AuthSupplier from './components/AuthSupplier'

ReactDOM.render(
	<React.StrictMode>
		<AuthSupplier>
			<App />
		</AuthSupplier>
	</React.StrictMode>,
	document.getElementById('root')
)
