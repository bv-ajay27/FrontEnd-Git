import "./App.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import OurMeetUps from "./components/OurMeetUps";
import Register from "./components/Register";
import Trainings from "./components/Trainings";


function App() {
  return (
    <>
      <BrowserRouter>
        <Home/>
        <Routes>
          <Route path="Training" element={<Trainings/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="ContactUs" element={<ContactUs/>}/>
          <Route path="OurMeetUps" element={<OurMeetUps/>}/>
          <Route path="Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
