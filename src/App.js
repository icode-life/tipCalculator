import BillAmount from './Components/BillAmount';
import ServiceLvl from './Components/ServiceLvl';
import Button from './Components/Button';
import Display from './Components/Display';



function App() {
  return(
     <div>
      <BillAmount></BillAmount>
      <ServiceLvl>How did you like the service?</ServiceLvl>
      <ServiceLvl>How did your friend like the service</ServiceLvl>
      <Display></Display>
      <Button></Button>
    </div>
  );
 
 }

export default App;
