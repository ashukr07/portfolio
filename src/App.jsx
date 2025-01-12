import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Skill from "./pages/Skills";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <Navbar />
        <div className="space-y-10">
          <div className=" bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>

          <About />
          <Experience />
          <Skill />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
