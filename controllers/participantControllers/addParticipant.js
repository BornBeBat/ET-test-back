import { participantServices } from '../../services/index.js';

export const addParticipant = async (req, res) => {
  const { body } = req;
  const result = await participantServices.addParticipant(body);
  res.status(201).json({
    result,
  });
};
