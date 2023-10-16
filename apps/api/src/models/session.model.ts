import mongoose, { Schema, Document } from 'mongoose';

interface ISession extends Document {
  _id: string;
  userId: string;
  date: Date;
  notes: string;
  bookings: [{ type: mongoose.Schema.Types.ObjectId; ref: 'Booking' }];
}

const sessionSchema: Schema = new Schema({
  _id: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  notes: { type: String, required: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
});

const sessionModel = mongoose.model<ISession>('CareSession', sessionSchema);

export default sessionModel;
