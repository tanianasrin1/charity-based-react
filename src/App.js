import './App.css';
import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import Donation from './components/Donation/Donation';
import ScholarHome from './components/Scholar/ScholarHome';
import Footer from './components/footer/Footer';
import { useState } from 'react';
export const InformationContext = React.createContext();

function App() {
  const [userInfo, setUserInfo ] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      
      <InformationContext.Provider value={[userInfo, setUserInfo ]}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/information" element={<Information></Information>}></Route>
        <Route path="/scholar" element={<ScholarHome></ScholarHome>}></Route>
        <Route path="/donation" element={<Donation></Donation>}></Route>
      </Routes>
      </InformationContext.Provider>
        
     
      
      <Footer></Footer>

    </div>
  );
}

export default App;
