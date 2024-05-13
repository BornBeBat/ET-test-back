import { Event } from '../../models/Event.js';

export const getEventById = async filter => {
  const res = await Event.findOne(filter).select('title').populate({
    path: 'participants',
    select: '_id name email createdAt',
  });
  return res;
};
