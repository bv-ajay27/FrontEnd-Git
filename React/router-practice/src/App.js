import "./App.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="ContactUs" element={<ContactUs/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
