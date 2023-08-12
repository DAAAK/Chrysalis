import mongoose, { Schema, Document } from 'mongoose';

interface IReservation extends Document {
  _id: string;
  userId: string;
  careSessionId: string;
  reservationDate: Date;
}

const reservationSchema: Schema = new Schema({
  _id: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  careSessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CareSession',
    required: true,
  },
  reservationDate: { type: Date, required: true },
});

const ReservationModel = mongoose.model<IReservation>(
  'Reservation',
  reservationSchema
);

export default ReservationModel;
