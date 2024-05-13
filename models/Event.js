import { Schema, model } from 'mongoose';

const eventShema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set title for event'],
    },
    description: {
      type: String,
      required: [true, 'Set description for event'],
    },
    date: {
      type: Date,
      required: [true, 'Set date for event'],
    },
    organizer: {
      type: String,
      required: [true, 'Set organizer for event'],
    },
    participants: [{ type: Schema.Types.ObjectId, ref: 'db-participant' }],
  },

  { versionKey: false }
);

export const Event = model('db-event', eventShema);
