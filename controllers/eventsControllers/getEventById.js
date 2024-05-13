import { eventsServices } from '../../services/index.js';

export const getEventById = async (req, res) => {
  const { id } = req.params;
  const result = await eventsServices.getEventById({ _id: id });
  res.json({
    result,
  });
};
