import { ctrlWrapper } from '../../decorators/ctrlWrapper.js';
import { addEvent } from './addEvent.js';
import { getEvents } from './getEvents.js';
import { getEventById } from './getEventById.js';

export const eventsControllers = {
  addEvent: ctrlWrapper(addEvent),
  getEvents: ctrlWrapper(getEvents),
  getEventById: ctrlWrapper(getEventById),
};
