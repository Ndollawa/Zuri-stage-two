import mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { UserInterface } from '../interfaces/user.interface';

const UserSchema = new mongoose.Schema<UserInterface>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not supported',
      },
    },
    occupation: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true },
);

UserSchema.plugin(mongoosePaginate);

export default UserSchema;
