import { ioSocketType } from '.'

const onMessageEvent = (socket: ioSocketType): void => {
	socket.on('message', msg => console.log(`[${socket.id}][message] ${msg}`))
}

export default onMessageEvent
