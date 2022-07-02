import './App.css';
import FetchAxiox from './componenets/FetchAxiox';
import Fetching from './componenets/Fetching';
import Form from './componenets/Form';
import FormValidation from './componenets/FormValidation';

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <Form/>
      <h1>Form Validation using React</h1>
      <FormValidation/>
      <h1>Fetch of fake API from JSON</h1>
      <Fetching/>
      <h1>Fetch of fake API from AXIOS</h1>
      <FetchAxiox/>
    </div>
  );
}

export default App;
