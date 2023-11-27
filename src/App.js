import BillAmount from './Components/BillAmount';
import ServiceLvl from './Components/ServiceLvl';
import Button from './Components/Button';
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
    const [tip, setTip] = useState(0);

  return (
    <div>
      <BillAmount />
      <ServiceLvl tip={tip} onSubmit={setTip}>How did you like the service?</ServiceLvl>
      <ServiceLvl>How did your friend like the service</ServiceLvl>
      <Display></Display>
      <Button></Button>
    </div>
  )
 }

export default App;
