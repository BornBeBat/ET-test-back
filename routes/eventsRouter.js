import express from 'express';
import { eventsControllers } from '../controllers/index.js';

export const eventsRouter = express.Router();

eventsRouter.post('/', eventsControllers.addEvent);

eventsRouter.get('/', eventsControllers.getEvents);

eventsRouter.get('/:id', eventsControllers.getEventById);
