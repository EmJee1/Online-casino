import { ioSocketType } from '.'

const onConnectedEvent = (socket: ioSocketType): void => {
	socket.on('message', msg => console.log(`[${socket.id}][message] ${msg}`))
}

export default onConnectedEvent
