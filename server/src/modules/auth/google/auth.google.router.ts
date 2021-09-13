import { Router } from 'express'
import validate from '../../../middlewares/validate'

// import router helpers
import controller from './auth.google.controler'
import validation from './auth.google.validation'

const router = Router()

router.post('/', validate(validation), controller)

export const prefix = '/auth/google'
export default router
