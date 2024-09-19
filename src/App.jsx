import Lenis from "lenis";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./ui/AnimatedRoutes";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
