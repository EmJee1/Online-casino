import express from 'express'
import cors from 'cors'
import injectResponseMethods from '../middlewares/inject-response-methods'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(injectResponseMethods)

export default app
