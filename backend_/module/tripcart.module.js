import mongoose from 'mongoose';

const TripCartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  departure: Object,
  return: Object,
  hotel: Object,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('TripCart', TripCartSchema);
