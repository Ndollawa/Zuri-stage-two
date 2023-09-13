import { Document } from 'mongoose';

export interface UserInterface extends Document {
  email: string | null;
  name: string | undefined;
  gender: string | undefined;
  occupation: string | undefined;
  bio: string | undefined;
}
