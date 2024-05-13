import { participantServices } from '../../services/index.js';

export const addParticipant = async (req, res) => {
  const { body } = req;
  const result = await participantServices.addParticipant(body);
  res.json({
    result,
  });
};
