import express from 'express';
import TripCart from '../module/tripcart.module.js';
const router = express.Router();

router.post('/save-tripcart', async (req, res) => {
  try {
    const { userId, departure, returnFlight, hotel, totalPrice } = req.body;

    const newTrip = new TripCart({
      userId,
      departure,
      return: returnFlight,
      hotel,
      totalPrice,
    });

    await newTrip.save();
    res.status(200).json({ message: 'Trip saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving trip', error: err.message });
  }
});

export default router;
