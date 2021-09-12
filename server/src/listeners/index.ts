import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { Socket } from 'socket.io'
import { readdirSync } from 'fs'
import { join } from 'path'

export type ioSocketType = Socket<
	DefaultEventsMap,
	DefaultEventsMap,
	DefaultEventsMap
>
export type eventHandler = (io: ioSocketType) => void

const initializeSocketEvents = (io: ioSocketType): void => {
	readdirSync(__dirname)
		.filter(file => file.endsWith('.evt.ts') || file.endsWith('evt.js'))
		.forEach(file =>
			import(join(__dirname, file))
				.then(eventImport => eventImport.default(io))
				.catch(({ message }) => {
					console.error(`[error] ${message}`)
					process.exit(1)
				})
		)
}

export default initializeSocketEvents
