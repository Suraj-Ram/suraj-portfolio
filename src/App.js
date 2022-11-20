import Header from "./components/Header";
//import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PhotoHero from "./components/PhotoHero";
import Projects2 from "./components/Projects2";
import NavCluster from "./components/NavCluster";
import AboutMe from "./components/AboutMe";

function App() {
  
  return (
    <>
    {/* <Header/> */}
    {/* Maybe add shadow for the container */}
    <div className="container mx-auto p-8  md:mt-12 shadow-2xl rounded-lg md:max-w-5xl xl:max-w-6xl md:mb-8">
      {/* <Hero/> */}
      <PhotoHero/>
      <NavCluster/>
      <AboutMe/>
      <Projects2/>
      
    </div>


      {/* <Header />
      <Hero />
      <div className="container mx-auto px-4 py-2">
        // <Bio />
        <Projects />
        <Contact />
      </div>
      <Footer /> */}
      
    </>
  );
}

export default App;
