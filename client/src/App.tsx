import { useEffect } from 'react'
import { io } from 'socket.io-client'

const App = () => {
	useEffect(() => {
		const socket = io('localhost:80')
		socket.emit('message', 'This is my socket message!')
	}, [])

	return (
		<div>
			<p>Hello, World!</p>
		</div>
	)
}

export default App
