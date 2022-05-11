const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://azad:azad@cluster0.okzvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

const dbobject = mongoose.connection

dbobject.on('connected' , ()=>{console.log('Mongo DB Connection Successfull')})
dbobject.on('error' , ()=>{console.log('Mongo DB Connection Failed')})

module.exports = mongoose