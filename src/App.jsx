import Navbar from "./components/Navbar";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/HomePage";
import {RouterPage} from "./router/RouterPage";




function App() {
  return (
    <div className="font-poppins scroll-smooth">
      
      <RouterPage />
      {/* <DestinationPage /> */}
    </div>
  );
}

export default App;
