const { WebsocketClient } = require('bybit-api');

// const API_KEY = '';
// const PRIVATE_KEY = '';

const wsConfig = {
  livenet: true,
  market: 'inverse',
  wsUrl: 'wss://stream.bybit.com/realtime'
};

const ws = new WebsocketClient(wsConfig);

ws.subscribe('klineV2.30.BTCUSD');

// Listen to events coming from websockets. This is the primary data source
ws.on('update', data => {
  console.log('update', data);
});

// Optional: Listen to websocket connection open event (automatic after subscribing to one or more topics)
ws.on('open', ({ wsKey, event }) => {
  console.log('connection open for websocket with ID: ' + wsKey);
});

// Optional: Listen to responses to websocket queries (e.g. the response after subscribing to a topic)
ws.on('response', response => {
  console.log('response', response);
});

// Optional: Listen to connection close event. Unexpected connection closes are automatically reconnected.
ws.on('close', () => {
  console.log('connection closed');
});

// Optional: Listen to raw error events.
// Note: responses to invalid topics are currently only sent in the "response" event.
ws.on('error', err => {
  console.error('ERR', err);
});