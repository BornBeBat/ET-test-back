import { Event } from '../../models/Event.js';
import { Participant } from '../../models/Participant.js';

export const addParticipant = async data => {
  const res = await Participant.create(data);

  if (res) {
    const { event, _id: id } = res;
    await Event.findByIdAndUpdate(
      { _id: event },
      { $push: { participants: id } },
      { new: true }
    );
  }

  return res;
};
