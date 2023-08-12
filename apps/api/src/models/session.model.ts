import mongoose, { Schema, Document } from 'mongoose';

interface ISession extends Document {
  _id: string;
  userId: string;
  date: Date;
  notes: string;
  reservations: [{ type: mongoose.Schema.Types.ObjectId; ref: 'Reservation' }];
}

const sessionSchema: Schema = new Schema({
  _id: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  notes: { type: String, required: true },
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
});

const sessionModel = mongoose.model<ISession>('CareSession', sessionSchema);

export default sessionModel;
