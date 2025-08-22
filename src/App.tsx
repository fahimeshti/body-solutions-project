import "./App.css";
import HeroSection from "./pages/home/HeroSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./pages/home/ServiceSection";
import FeaturesSection from "./pages/home/FeaturesSection";
import Footer from "./pages/home/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default App;
