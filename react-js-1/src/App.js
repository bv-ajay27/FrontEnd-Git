import './App.css';
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';
import ChildComponent3 from './components/ChildComponent3';

function App() {
  return (
    <div className="App">
      <div><h1>Hello World</h1></div>
      <span>This is span tag</span><span>This is also another span tag</span>
      <ChildComponent1/>
      <ChildComponent2/>
      <ChildComponent3/>
    </div>
  );
}

export default App;
