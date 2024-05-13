import { ctrlWrapper } from '../../decorators/ctrlWrapper.js';
import { addEvent } from './addEvent.js';

export const eventsControllers = {
  addEvent: ctrlWrapper(addEvent),
};
