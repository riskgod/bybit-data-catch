const { WebsocketClient } = require('bybit-api');
const { insert } = require('./mongo')
const wsConfig = {
  market: 'inverse',
  livenet: true,
  pongTimeout: 1000,
  pingInterval: 10000,
  wsUrl: 'wss://stream.bybit.com/realtime_public'
};

const ws = new WebsocketClient(wsConfig);

ws.subscribe('orderBook_200.100ms.BTCUSDT');

// Listen to events coming from websockets. This is the primary data source
ws.on('update', async message => {
  const {topic, type, data, timestamp_e6 } = message;
  if (type == 'delta') {
    const updateLevels = data.update
    const insertLevels = data.insert
    const deleteLevels = data.delete
    const chain = topic.split('.')[2]


    const res =  {
      transParis: chain,
      timestamp: timestamp_e6,
      updateLevels: updateLevels,
      insertLevels: insertLevels,
      deleteLevels: deleteLevels
    }
    // console.log(res)
    await insert(res)
  }
});

ws.on('response', response => {
  console.log('response', response);
});

ws.on('error', err => {
  console.error('ERR', err);
});