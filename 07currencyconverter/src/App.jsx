import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './customhooks/useCurrencyInfo'
 import './App.css'

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const CurrencyInfo = useCurrencyInfo(from)
    const options = Object.keys(CurrencyInfo);
    const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
    }
    
    const convert = () => {
       setConvertedAmount(amount * CurrencyInfo[to]);
    }
  return (
    <>
      <h1 className='text-3xl bg-orange-400'>Currency Converter App</h1>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/19570337/pexels-photo-19570337/free-photo-of-white-trees-and-road-in-forest-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount) => {
                                    setAmount(amount)
                                }}
                                currencyOptions={options}
                                onCurrencyChange = {(currency) => {
                                  setAmount(amount)
                                }}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange = { (currency) => {
                                  setTo(currency)
                                }
                                }
                                amountDisable
                                selectCurrency={from}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
