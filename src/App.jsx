import Article from "./components/Article";
import DestiCard from "./components/DestiCard";
import Navbar from "./components/Navbar";
import Destinations from "./pages/Destinations";
import Food from "./pages/Food";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";



function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Destinations />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
