import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
app.use(express.json());
app.use('/', userRoutes);

app.listen(3000, () => console.log('Rodando na porta 3000'));
