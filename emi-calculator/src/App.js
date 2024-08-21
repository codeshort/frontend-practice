import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [months, setMonths] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const emiRef = useRef(null);
  const dpRef = useRef(null);

  function updateEmi(downPayment) {
    const prinicipalAmt = totalAmount - downPayment;
    const emiAmt = ((prinicipalAmt * rate * (1 + rate) ** months) / ((1 + rate) ** months - 1)).toFixed(0);
    setEmi(emiAmt);
    emiRef.current.value = emiAmt;
  }

  function onAmountChange(event) {
   setTotalAmount(event.target.value);
  }

  function onRateChange(event) {
    const monthlyRate = event.target.value / (12 * 100);
   setRate(monthlyRate);
  }

  function onTenureChange(event) {
   setMonths(event.target.value);
  }

  function onDownPaymentChange(event) {
    const downPaymentAmt = (event.target.value * totalAmount)/ 100;
    setDownPayment(downPayment);
    dpRef.current.value = (downPaymentAmt/totalAmount)*100;
    updateEmi(downPaymentAmt);
  }

  function onEmiChange(event) {
   const emiAmt = event.target.value;

   if(totalAmount ===0  || rate === 0 || months ===0 || !event.target.value) {
    console.error("ERR");
      return;
   }
   
   setEmi(emiAmt);
   emiRef.current.value = emiAmt;
   updateDownPayment(emiAmt);

  }

  function updateDownPayment(emiAmt) {
   const principalAmt = emiAmt * (((1+rate)**months - 1)/ (rate * (1+rate)**months)).toFixed(0);
   let downPayment = totalAmount-principalAmt;
   if(downPayment<0){
    downPayment = 0;
   }
   
   setDownPayment(downPayment);
   dpRef.current.value = (downPayment/totalAmount)*100;
  }


  return (
    <div className="App">
      <div>
        <label className="label">Total Amount</label>
        <input  type="number" onChange={onAmountChange}/>
      </div>
      <div>
        <label className="label">Rate per annum</label>
        <input type="number" onChange={onRateChange}/>
      </div>
      <div>
        <label className="label">Tenure (in months)</label>
        <input  type="number" onChange={onTenureChange}/>
      </div>
      <div>
        <div>Down Payment</div>
        <input className="range-input"  type="range" min="0" max="100" onChange={onDownPaymentChange} ref={dpRef}/>
        <label>{downPayment}</label>
      </div>
      <div>
        <div>Monthly Emi</div>
        <input className="range-input" type="range" min="1" max={totalAmount} onChange={onEmiChange} ref={emiRef}/>
        <label>{emi}</label>
      </div>
    </div>
  );
}

export default App;
