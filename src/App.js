import Header from "./components/Header";
//import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-2">
        {/* <Bio /> */}
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
