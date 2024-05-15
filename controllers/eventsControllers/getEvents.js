import { eventsServices } from '../../services/index.js';
import { HttpError } from '../../tools/HttpError.js';

export const getEvents = async (req, res) => {
  const { page = 1, limit = 12, title, date, organizer } = req.query;

  const skip = (page - 1) * limit;
  const query = { skip, limit };

  if (title || date || organizer) {
    const sort = new Object();
    if (title) sort.title = Number(title);
    if (date) sort.date = Number(date);
    if (organizer) sort.organizer = Number(organizer);
    query.sort = sort;
  }

  const result = await eventsServices.getEventList({}, query);
  if (result.length === 0) {
    throw HttpError(404);
  }
  res.json({ result });
};
