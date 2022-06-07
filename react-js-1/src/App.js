import './App.css';
import ChildComponent1 from './components/childComponent1';

function App() {
  return (
    <div className="App">
      <div>hello World</div>
      <div>What is this no Emmet Abbreviations its very bad</div>
      <p>This is paragraph tag to add some text to check weather it is block or inline</p>
      <span>This is span tag</span><span>This is also another span tag</span>
      <ChildComponent1/>
    </div>
  );
}

export default App;
