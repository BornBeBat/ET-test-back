import { Event } from '../../models/Event.js';

export const addEvent = data => {
  const res = Event.create(data);
  return res;
};
