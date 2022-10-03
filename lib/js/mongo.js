const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/hft", {
  authSource: "admin",
  user: "root",
  pass: "123456",
  useNewUrlParser: true,
  useUnifiedTopology: true,
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