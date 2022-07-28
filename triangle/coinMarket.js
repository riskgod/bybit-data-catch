const axios = require('axios').default;
const BigNumber = require('bignumber.js');

const btcUrl = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bitcoin&start=1&limit=100&category=spot&sort=cmc_rank_advanced'
const ethUrl = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=ethereum&start=1&limit=100&category=spot&sort=cmc_rank_advanced'
const dogeUrl = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=dogecoin&start=1&limit=100&category=spot&sort=cmc_rank_advanced'
const xrpUrl = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=xrp&start=1&limit=100&category=spot&sort=cmc_rank_advanced'
const solUrl = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=solana&start=1&limit=100&category=spot&sort=cmc_rank_advanced'
const bnbUrl = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bnb&start=1&limit=100&category=spot&sort=cmc_rank_advanced'



function getBtc() {
  return axios.get(btcUrl)
}

function getEth() {
  return axios.get(ethUrl)
}

function getDoge() {
  return axios.get(dogeUrl)
}

function getXrp() {
  return axios.get(xrpUrl)
}

function getSol() {
  return axios.get(solUrl)
}

function getBnb() {
  return axios.get(bnbUrl)
}

async function fetchAll() {
  const result = await axios.all([getBtc(), getBnb(), getDoge(), getEth(), getSol(), getXrp()])
  result.forEach(e => {
   if ( e.data.status.error_code === '0') {
    const ree = dealData(e.data.data)
    // console.log(ree)
   }
  })
}

fetchAll()


function dealData(_params) {
  const res = []
  const exchanges = []
  _params.marketPairs.map(e => {
    if (e.quoteSymbol === 'USDT') {
      const obj = {
        coin: _params.symbol,
        exchangeName: e.exchangeName,
        price: e.price,
        valUsed: e.volumeUsd
      }
      res.push(obj)
      exchanges.push(e.exchangeName)
    }
    
  })
  const sx = res.sort(e => { return e.price })
  const x = sx[0].price
  const y = sx[sx.length-1].price
  const dd = BigNumber(x-y).div(y).toString()

  console.log('========')
  console.log(res[0].coin)
  console.log(dd)
  console.log('========')

  return res
}