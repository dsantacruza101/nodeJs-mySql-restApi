import cors from 'cors';
import express from 'express';
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors(), indexRoutes);
app.use('/api', cors(), employeesRoutes);

app.use( ( req, res ) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
});

export default app

