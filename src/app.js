import express from 'express';
import 'dotenv/config';

import EmployeesRouter from './routes/employees.routes.js';

const app = express();
app.disable('x-powered-by');
app.use(express.json());

app.use('/employees', EmployeesRouter);

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});