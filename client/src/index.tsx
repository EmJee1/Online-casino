import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthSupplier from './components/AuthSupplier'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthSupplier>
				<App />
			</AuthSupplier>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
