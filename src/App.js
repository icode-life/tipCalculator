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
  /**states */
    const [bill, setBill] = useState("");
    const [tip1, setTip1] = useState(0);
    const [tip2, setTip2] = useState(0);

  /**derived states aka variables */
    const totalTip = bill * ((tip1 + tip2)/2 /100);

  /**handler for reset button */
    const clear = () => {
      setBill("");
      setTip1(0);
      setTip2(0);
    }

  return (
    <div>
      <BillAmount bill={bill} onSetBill={setBill}/>
      <ServiceLvl tip={tip1} onSelect={setTip1}>How did you like the service?</ServiceLvl>
      <ServiceLvl tip={tip2} onSelect={setTip2}>How did your friend like the service</ServiceLvl>
      {/**on affiche le résultat que s'il y a une addition */}
      {bill > 0 && (
        <>
          <Display bill={bill} totalTip={totalTip}></Display>
          <Reset onReset={clear}>Reset</Reset>
        </>
      )}
      
    </div>
  )
 }

export default App;
