import 'reflect-metadata';

import express, { Request, Response } from 'express';
import cors from 'cors';

import 'express-async-errors';

const app = express();

app.use(cors());

app.use(express.json());


app.get('/teste', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server started on port ${process.env.PORT || 3333}`);
});