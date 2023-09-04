import mongoose, { Schema, Document } from 'mongoose';

interface IBooking extends Document {
  _id: string;
  userId: string;
  careType: string;
  startTime: number;
  endTime: number;
  bookingDate: Date;
  status: string;
}

const bookingSchema: Schema = new Schema({
  _id: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  careType: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'cancelled'],
    default: 'pending',
  },
});

const BookingModel = mongoose.model<IBooking>('Booking', bookingSchema);

export default BookingModel;
