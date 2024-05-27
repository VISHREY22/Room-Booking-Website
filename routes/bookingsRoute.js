const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Room = require('../models/room');
router.post('/bookroom', async (req, res) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totalAmount,
        totaldays
    } = req.body;
    try {
        const newBooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totalAmount,
            totaldays,
            transactionid: '1234'
        });

        const booking = await newBooking.save();

        const roomtemp = await Room.findOne({ _id: room._id });
        roomtemp.currentbookings.push({ bookingid: booking._id, fromdate, todate, userid, status: booking.status });
        await roomtemp.save();

        res.status(200).send('Payment Successful. Your Room Is Booked.');
    } catch (error) {
        console.error('Error booking room:', error.message);
        res.status(400).json({ error: error.message });
    }
});
router.post('/getbookingbyuserid', async (req, res) => {
    const userid = req.body.userid;
    try {
        const bookings = await Booking.find({ userid: userid });
        res.send(bookings);
    } catch (error) {
        console.error('Error fetching bookings by user ID:', error.message);
        return res.status(400).json({ error: error.message });
    }
});
router.post('/cancelbooking', async (req, res) => {
    const { bookingid, roomid } = req.body;
    try {
        const booking = await Booking.findOne({ _id: bookingid });
        booking.status = 'Cancelled'; // Corrected spelling mistake here
        await booking.save();

        const room = await Room.findOne({ _id: roomid });
        const currentBookings = room.currentbookings.filter(booking => booking.bookingid.toString() !== bookingid);
        room.currentbookings = currentBookings;
        await room.save();

        res.send("Successfully Cancelled");
    } catch (error) {
        return res.status(400).json({ error });
    }
});
router.get('/getallbookings',async(req,res)=>{
    try {
        const bookings = await Booking.find()
        res.send(bookings);
    } catch (error) {
        return res.status(400).json({error});
    }
})
module.exports = router;
