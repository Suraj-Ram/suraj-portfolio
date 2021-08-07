import Header from "./components/Header";
import Bio from "./components/Bio";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-2">
        <Bio />
        <Projects />
      </div>
    </>
  );
}

export default App;
