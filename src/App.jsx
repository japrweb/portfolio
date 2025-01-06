import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import GoUp from "./components/GoUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#1a1a1a]">
      <Navbar />
      <div className="space-y-10 md:space-y-20">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <GoUp /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
