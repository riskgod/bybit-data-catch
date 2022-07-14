const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/hft');

const Bybit = mongoose.model('bybits', { 
    timestamp: {type: String, index: true},
    transParis: String,
    updateLevels: [{
        price: { type: String, default: '' },
        symbol: { type: String, default: '' },
        id: { type: String, default: '' },
        side: { type: String, default: '' },
        size: { type: Number },
      }],  
    insertLevels: [{
        price: { type: String, default: '' },
        symbol: { type: String, default: '' },
        id: { type: String, default: '' },
        side: { type: String, default: '' },
        size: { type: Number },
      }],  
    deleteLevels: [{
        price: { type: String, default: '' },
        symbol: { type: String, default: '' },
        id: { type: String, default: '' },
        side: { type: String, default: '' },
      }],  
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