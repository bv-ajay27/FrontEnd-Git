import './App.css';
import ChildComp1 from "./component-1/ChildComp1"
import ChildComp2 from './component-2/ChildComp2'
import SubChildComp1 from './component-1/SubChildComp1';
import SubChildComp2 from './component-2/SubChildComp2';

function App() {
  return (
    <div className="App">
      <ChildComp1 title="Heading-1"/>
      <ChildComp2 title="Heading-2" bgColor="green"/>
      <SubChildComp1 title="Heading-3"/>
      <hr></hr>
      <hr></hr>
      <SubChildComp2/>
    </div>
  );
}

export default App;
