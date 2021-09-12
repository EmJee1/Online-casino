import { ServerOptions } from 'socket.io'

const socketIoOptions: Partial<ServerOptions> = {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
}

export default socketIoOptions
