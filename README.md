# crypto-calc
calculate crypto pair prices for 5 crypto pairs

This package allows which assets can be traded(exchanged) between 5 crypto pairs.

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
**amount**: This is the amount of asset that you want to calculate(transfer) between the pair(you want to transfer from the first asset like BTC to second asset like LTC)

The function is asynchronous. It should return the amount converted
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
To optimize this code, I have used an external api which allows me to calculate from a given asset like BITCOIN(BTC) to USD. After converting all provided assets to USD, I was able to now calculate from one of the assets to another. **This API is realtime and whenever the value of any asset changes, It is also reflected in my code. This will allow me to always return most accurate values of the assets at any time in future.**
