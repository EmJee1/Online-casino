import { Router } from 'express'
import * as controller from './profile.controller'

const router = Router()

router.get('/', controller.getProfile)

export const prefix = '/profile'
export const authenticated = true
export default router
