import { Event } from '../../models/Event.js';

export async function getEventList(filter = {}, query = {}) {
  const data = await Event.find(filter, '', query).select(
    'title description date organizer'
  );
  return data;
}
