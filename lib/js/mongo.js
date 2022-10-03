const mongoose = require('mongoose');

mongoose.connect("", {
  authSource: "admin",
  user: "root",
  pass: "",
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