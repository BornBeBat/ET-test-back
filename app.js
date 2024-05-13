import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { eventsRouter, participantRouter } from './routes/index.js';

export const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api/events', eventsRouter);
app.use('/api/participant', participantRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({
    status: 'error',
    code: status,
    message,
  });
});
