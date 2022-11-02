import express  from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();


app.use(express.json())
app.use('/api',empleadosRoutes)
app.use(indexRoutes)
app.use((req, res, next)=>{
    res.status(404).json({
        mensaje:"Ruta no encontrada"
    })
})
export default app