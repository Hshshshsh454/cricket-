import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
// import Career from "./pages/Career";
// import Blog from "./pages/Blog";
// import Insights101 from "./pages/Insights101";
// import WhySoftmaxs from "./pages/whySoftmaxs";
// import PrivacyPolicyPage from "./pages/PrivacyPolicy";


// ✅ Import Shop Page
import Shop from "./components/Shop";
import Tournaments from "./components/Tournaments";
import VideoTrainingSection from "./components/VideoTrainingSection";
import Page2 from "./components/Page2";
import Details from "./components/Details"

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        
      </Routes>

     <>
     <Details />
     <Shop />
     <Tournaments />
     
     <VideoTrainingSection />
     <About />
     </>
      <Footer />
    </Router>
  );
};

export default App;


