import {Router} from 'express'
import {pong} from '../controllers/index.controllers.js'

const router = Router()

router.get('/pong', pong )

export default router