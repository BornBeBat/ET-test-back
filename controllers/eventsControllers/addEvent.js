import { eventsServices } from '../../services/index.js';

export const addEvent = async (req, res) => {
  const { body } = req;
  const result = await eventsServices.addEvent(body);
  res.json({
    result,
  });
};
