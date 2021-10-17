import { Router } from 'express'
import validate from '../../middlewares/validate'
import * as controller from './friends.controller'
import * as validation from './friends.validation'

const router = Router()

router.post('/request', validate(validation.request), controller.request)
router.patch('/accept', validate(validation.accept), controller.accept)

export const prefix = '/friends'
export const authenticated = true
export default router
