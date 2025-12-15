import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import Registration from "./components/Registration";
import Home from "./components/Home";
import InputField from "./components/InputField";
import Navbar from "./components/Navbar";
// import RegistrationSlider from "./components/RegistrationSlider";
import Shop from "./components/Shop";
import VideoTrainingSection from "./components/VideoTrainingSection";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Navbar />
   
      <Home />
      <Details />
      <About />
      <FormSection />
      
      <Shop />
      <VideoTrainingSection />
      <Footer />
      <Navbar />

    

    </div>
  );
}

export default App;