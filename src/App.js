import BillAmount from './Components/BillAmount';
import ServiceLvl from './Components/ServiceLvl';
import Reset from './Components/Reset';
import Display from './Components/Display';
import { useState } from "react";




function App() {
  return(
    <div>
      <TipCalculator />  {/*this component exists for the sake of having a parent component in order to lift up states that need to be shared */}
    </div>
  );
 
 }

 const TipCalculator = () => {
    const [bill, setBill] = useState("");
    const [tips, setTip] = useState([]);

    const addTip = (tip) => {
      setTip((tip) => [...tips, tip]);
    };

    /*const changeBill = (bill) => {
      setBill(Number(bill));
    };*/

  return (
    <div>
      <BillAmount bill={bill} onSetBill={setBill}/>
      <ServiceLvl tip={tips} onChange={addTip}>How did you like the service?</ServiceLvl>
      <ServiceLvl tip={tips} onChange={addTip}>How did your friend like the service</ServiceLvl>
      <Display bill={bill}></Display>
      <Reset></Reset>
    </div>
  )
 }

export default App;
