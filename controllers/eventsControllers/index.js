import { ctrlWrapper } from '../../decorators/ctrlWrapper.js';
import { addEvent } from './addEvent.js';
import { getEvents } from './getEvents.js';

export const eventsControllers = {
  addEvent: ctrlWrapper(addEvent),
  getEvents: ctrlWrapper(getEvents),
};
