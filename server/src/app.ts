import { Server } from 'socket.io'
import { createServer } from 'http'
import './config/environment'
import app from './config/express.conf'
import databse from './config/knex.conf'
import socketIoOptions from './config/socketio.conf'
import initializeSocketEvents from './listeners'
import initializeModules from './modules'

initializeModules(app)
const server = createServer(app)
const io = new Server(server, socketIoOptions)

io.on('connection', initializeSocketEvents)

server.listen(8080)
