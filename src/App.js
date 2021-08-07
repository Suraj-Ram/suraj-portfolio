import Header from "./components/Header"
import Bio from "./components/Bio"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-2">
        <Bio />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
