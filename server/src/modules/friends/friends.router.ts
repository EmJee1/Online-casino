import { Router } from 'express'
import * as validation from 'validation/schemas/friends'
import * as controller from './friends.controller'
import validate from '../../middlewares/validate'

const router = Router()

router.post('/request', validate(validation.request), controller.request)
router.patch('/accept', validate(validation.accept), controller.accept)

export const prefix = '/friends'
export const authenticated = true
export default router
