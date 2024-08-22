import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouterPage } from "./router/RouterPage";


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="font-poppins">
      <ScrollToTop />
      <RouterPage />
    </div>
  );
}

export default App;
