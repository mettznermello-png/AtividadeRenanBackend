import ControllerUser from '../controller/user.js'
import { Router } from 'express'
import authMiddleware from '../middleware/auth.js'

const router = Router()

router.get('/buscar', authMiddleware, ControllerUser.Buscar)
router.get('/datalhes', authMiddleware, ControllerUser.Detalhes)
router.post('/criar', authMiddleware, ControllerUser.Criar)
router.put('/alterar', authMiddleware, ControllerUser.Alterar)
router.delete('/deletar', authMiddleware, ControllerUser.Deletar)
router.post('/login', ControllerUser.Criar)

export default router