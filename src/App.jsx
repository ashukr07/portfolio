import { Toaster } from "react-hot-toast";

import { Analytics } from "@vercel/analytics/react"

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import FeaturedProjects from "./pages/FeaturedProject";
import Hero from "./pages/Hero";
import Skill from "./pages/Skills";
import { BrowserRouter } from "react-router";
import Footer from "./components/Footer";
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
          <FeaturedProjects />
          <Contact />
          <Footer />
        </div>
      </div>
      <Toaster />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
