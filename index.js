const axios = require('axios');
const pairArray = ["BTCLTC","LTCBTC","ETHLINK","LINKETH","ZECBTC"];
const cryptoPairPrice = async (from, to, amount) => {
  let pairName = `${from}${to}`;
  if(!pairArray.includes(pairName)) {
    throw new Error("pair currenlty not supported");
  }else{
    try{
      const res = await axios.get(`https://api.coinbase.com/v2/prices/${from}-USD/buy`);
      const fromToUsd = res.data.data.amount;
      const res2 = await axios.get(`https://api.coinbase.com/v2/prices/${to}-USD/buy`);
      const toUsd = res2.data.data.amount;
      const unitFrom = fromToUsd / toUsd;
      return(unitFrom * amount);
    }catch(err) {
      throw new Error(err.message);
    }
  }
}
module.exports.cryptoPairPrice = cryptoPairPrice;