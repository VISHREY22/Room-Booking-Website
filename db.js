const mongoose = require('mongoose');
var mongoURL = 'YOUR MONGODB URL';

mongoose.connect(mongoURL,{useUnifiedTopology: true , useNewUrlParser: true})
var connection = mongoose.connection;
connection.on('error',()=>{
    console.log("mongoDB conncection failed");
})
connection.on('connected', () => {
  console.log("Connected to MongoDB")
});

module.exports = mongoose;
