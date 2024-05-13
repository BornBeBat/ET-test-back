import { Schema, model } from 'mongoose';
import { emailRegExp, hearList } from '../constant/index.js';

const participantShema = new Schema(
  {
    name: {
      type: String,
      minLength: 3,
      required: [true, 'name is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      match: emailRegExp,
    },
    birthDate: {
      type: Date,
      required: [true, 'birthDate is required'],
    },
    from: {
      type: String,
      required: [true, 'Set where did you hear about this event'],
      enum: hearList,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: 'db-event',
      required: [true, 'event is required'],
    },
  },
  { timestamps: true, versionKey: false }
);

export const Participant = model('db-participant', participantShema);
