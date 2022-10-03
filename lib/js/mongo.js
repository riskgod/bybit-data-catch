const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/hft');
mongoose.connect("", {
  poolSize: 10,
  authSource: "admin",
  user: "root",
  pass: "",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const Bybit = mongoose.model('bybitsComp', { 
    timestamp: {type: String, index: true},
    transParis: String,
    updateLevels: String,  
    insertLevels: String,  
    deleteLevels: String,  
});
async function insert(obj) {
  try {
    const transData = new Bybit(obj);
    transData.save()
  } catch (error) {
    console.err(error)
  }
}

module.exports = {
    insert
}