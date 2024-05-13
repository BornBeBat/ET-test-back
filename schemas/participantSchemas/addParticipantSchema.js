import Joi from 'joi';
import { emailRegExp, hearList } from '../../constant/index.js';

export const addParticipantSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  birthDate: Joi.date().required(),
  from: Joi.string()
    .valid(...hearList)
    .required(),
  event: Joi.string().required(),
});
