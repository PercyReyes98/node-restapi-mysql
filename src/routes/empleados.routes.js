import {Router} from 'express'
import {
    getEmpleado, 
    postEmpleado,
    putEmpleado, 
    deleteEmpelado,
    getEmpleados} from '../controllers/empleados.controllers.js'

const router = Router()
router.get('/employ', getEmpleados)
router.get('/employ/:id', getEmpleado)
router.post('/employ', postEmpleado)
router.put('/employ/:id', putEmpleado)//peticion pacth en caso quiera actualizar solo algunos datos(sugerencia) 
router.delete('/employ/:id', deleteEmpelado)

export default router