import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import DashBoard from './components/DashBoard/DashBoard';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
         <Route path="/service" element={<Service></Service>}></Route>
         <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
         <Route path="/contact" element={<Contact></Contact>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <DashBoard></DashBoard> */}
    
   
    </div>
  );
}

export default App;
