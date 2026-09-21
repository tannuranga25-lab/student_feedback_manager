import express from 'express';
import cors from 'cors';

import feedbackRouter from './routes/feedback.routes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', feedbackRouter);

export default app;