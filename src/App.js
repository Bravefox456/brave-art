import React, { useRef } from "react";
import './App.css';
import Header from './components/Header';
import HeroSection from './components/Hero';
import './components/custom.css';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Services from './components/services';
import Career from './components/careers';
import Contact from './components/Contact';
import About from './components/About';
import Success from './components/Success';
import Whatwedo from './components/Whatwedo';
import Cta from './components/Cta';
import Workwithus from './components/Workwithus';
import Whatclientssay from './components/Whatclientssay';
import Possibility from './components/Possibility';
import Safeharbor from "./components/Safeharbor";
import Cookie from "./components/Cookie";
import Termsofuse from "./components/Termsofuse";
import Privacy from "./components/Privacy";
import Banking from "./components/Banking";
import DataEngineering from "./components/DataEngineering";
import Ai from "./components/Ai";
import BankingAndFinancialServices from "./components/BankingAndFinancialServices";
import Travel from "./components/Travel";
import Insurance from "./components/Insurance";
import Healthcare from "./components/Healthcare";
import Retail from "./components/Retail";

function App() {
  const whatwedoRef = useRef(null);

  // Function to scroll to Whatwedo section
  const scrollToWhatwedo = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    whatwedoRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (<div>
    <Router>
    <div style={{ backgroundColor: 'black' }}>
    <div className="gradient__bg">
    <Header scrollToWhatwedo={scrollToWhatwedo} />
    </div>
    <Routes>
    
    <Route
        path="*"
        element={
          <>
          <div className='gradient__bg'>
            <HeroSection />
            </div>
            <Success />
            <div ref={whatwedoRef}>
              <Whatwedo />
            </div>
            <Cta />
            <Whatclientssay />
            <Possibility />
          </>
        }
      />
    <Route path="/services" element={<Services/>} />
    <Route path="/careers" element={<Career/>} />
    <Route path="/contactus" element={<Contact/>} />
    <Route path="/aboutus" element={<About/>} />
    <Route path="/work-with-us" element={<Workwithus/>} />
    <Route path="/microsoft" element={<Possibility/>} />
    <Route path="/safeharbor" element={<Safeharbor/>} />
    <Route path="/cookiepolicy" element={<Cookie/>} />
    <Route path="/termsofuse" element={<Termsofuse/>} />
    <Route path="/privacypolicy" element={<Privacy/>} />
    <Route path="/banking" element={<Banking/>} />
    <Route path="/data-engineering" element={<DataEngineering/>} />
    <Route path="/ai" element={<Ai/>} />
    <Route path="/banking-and-financial-services" element={<BankingAndFinancialServices/>} />
    <Route path="/travel" element={<Travel/>} />
    <Route path="/insurance" element={<Insurance/>} />
    <Route path="/healthcare" element={<Healthcare/>} />
    <Route path="/retail" element={<Retail/>} />
    </Routes>
    <Footer/>
    </div>
    </Router>
    </div>
  );
};

export default App;
