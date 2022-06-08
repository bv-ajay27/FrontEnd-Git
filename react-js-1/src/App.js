import './App.css';
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';

function App() {
  return (
    <div className="App">
      <div><h1>Hello World</h1></div>
      <span>This is span tag</span><span>This is also another span tag</span>
      <ChildComponent1/>
      <ChildComponent2/>
    </div>
  );
}

export default App;
