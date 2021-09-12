import { Server } from 'socket.io'
import { createServer } from 'http'
import app from './config/express.conf'
import socketIoOptions from './config/socketio.conf'
import initializeSocketEvents from './listeners'

const server = createServer(app)
const io = new Server(server, socketIoOptions)

io.on('connection', initializeSocketEvents)

server.listen(80)
