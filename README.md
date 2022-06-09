# crypto-calc
calculate crypto pair prices for 5 crypto pairs

This package allows to calculate which assets can be traded(exchanged) between 5 crypto pairs.

Currently, the supported crypto pairs are these
1) BTC -> LTC
2) LTC -> BTC
3) ETH -> LINK
4) LINK -> ETH
5) ZEC -> BTC

**Usage**
You have to import the function cryptoPairPrice from 'crypto-calc'
```
import { cryptoPairPrice } from 'crypto-calc';
```
To call this function you have to pass 3 parameters (from, to, amount)
**from**: this is the from asset of the pair forexample **BTC**
**to**: this is the to asset of the pair forexample **LTC**
**amount**: This is the amount that you want to calculate(transfer) from the first asset of pair to second asset of pair.

The function is asynchronous. It should return the amount converted or throw error which you have to catch and do whatever you want. Here i have logged erroro to the console.

**example**
```
import { cryptoPairPrice} from 'crypto-calc'
async function calculate() {
  try{
    const litValue = await cryptoPairPrice('BTC','LTC',1);
    console.log(litValue);
    //it should log 1 bitcoin converted to litcoin
  }catch(err){
    console.log(err);
  }
}
calculate();
```

**Practises for optimization**
To optimize this code, I have used an external api which allows me to calculate from a given asset like BITCOIN(BTC) to USD. After converting all provided assets to USD, I was able to now calculate from one of the assets to another. **This API is realtime and whenever the value of any asset changes, It is also reflected in my code. This will allow me to always return most accurate values of the assets at any time in future. The used api is (https://api.coinbase.com)**
