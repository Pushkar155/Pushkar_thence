import './App.css';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Accordian from './pages/accordian/Accordian';
import Footer from './components/footer/Footer';
import Registration from './pages/reges/Registration';
import Congrats from './pages/comgrats/Congrats';

import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path= "/" element={<><Navbar/><Home/><Accordian/><Footer/></>}/>
      <Route exact path= "/registration" element={<><Registration/></>}/>
      <Route exact path= "/congrats" element={<><Congrats/></>}/>
      </Routes>
    </div>
  );
}

export default App;
