import { ctrlWrapper } from '../../decorators/ctrlWrapper.js';
import { addParticipant } from './addParticipant.js';

export const participantControllers = {
  addParticipant: ctrlWrapper(addParticipant),
};
