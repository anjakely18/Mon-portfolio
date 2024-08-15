import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
