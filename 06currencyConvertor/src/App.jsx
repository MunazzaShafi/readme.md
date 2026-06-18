import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'


function App() {
const [amount,setAmount]=useState(0)
const [from, setFrom]=useState("usd")
const [to, setTo]=useState("pkr")
const [coverter,setConverter] =useState(0)

const currencyInfo =useCurrencyInfo(from)
const options= Object.keys(currencyInfo)


//swap
const swap =()=>{
  setFrom(to)
  setTo(from)
  setConverter(amount)
  setAmount(coverter)
}
const covert=()=>{
   setConverter(amount*currencyInfo[to])
 
}

  return (
    <>
     <div className='w-full h-screen flex flex-wrap justify-center
     items-center bg-cover bg-no-repeat'>
      {/* style={{backgroundImage: url('https://media.istockphoto.com/id/2166399130/photo/money-interest-rate-increase-concept-percentage-commission-credit-grow-up-stock-risk.jpg?b=1&s=612x612&w=0&k=20&c=YoOsNNeh5VEgdEfVl9i3VXK1hUkJnM28lXvCEtIcRHw=')}} */}
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60
        rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form action=""
          onSubmit={(e)=>{
            e.preventDefault();
            covert()
          }}
          >
            <div className='w-full mb-1'>
              <InputBox 
              label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
               selectCurrency={from}
               onAmountChange={(amount)=>setAmount(amount)}

/>
            </div>
            <div className='"relative w-full h-0.5'>
              <button type='button' className='absolute left-1/2-translate-x-1/2
              -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >
                
                Swap
                  
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
               <InputBox 
              label="To"
              amount={coverter}
              currencyOption={options}
              onCurrencyChange={(currency)=>setTo(currency)}
               selectCurrency={to}
               currencyDisable ={false}

/>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Covert {from.toUpperCase()}to{to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
