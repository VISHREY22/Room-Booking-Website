const express = require("express");
const app = express();
const dbConfig = require('./db');
const userRoute = require('./routes/usersRoute');
const bookingsRoute = require('./routes/bookingsRoute')
const roomsRoute = require('./routes/roomsRoute');



app.use(express.json());
app.use('/api/rooms',roomsRoute);
app.use('/api/users',userRoute);
app.use('/api/bookings',bookingsRoute);
const  PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));