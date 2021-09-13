import { useEffect } from 'react'
import { io } from 'socket.io-client'
import Login from './views/Login'
import './util/axios'

const App = () => {
	useEffect(() => {
		const socket = io('localhost:8080')
		socket.emit('message', 'This is my socket message!')
	}, [])

	return (
		<div>
			<Login />
		</div>
	)
}

export default App
