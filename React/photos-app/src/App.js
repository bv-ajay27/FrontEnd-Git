import {Route,Routes,BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
