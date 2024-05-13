import express from 'express';
import { participantControllers } from '../controllers/index.js';

import { validateBody } from '../middlewares/validateBody.js';
import { addParticipantSchema } from '../schemas/index.js';

export const participantRouter = express.Router();

participantRouter.post(
  '/',
  validateBody(addParticipantSchema),
  participantControllers.addParticipant
);
