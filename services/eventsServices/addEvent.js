import { Event } from '../../models/Event.js';

export const addEvent = async data => {
  const res = await Event.create(data);
  return res;
};
