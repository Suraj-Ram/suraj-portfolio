import PhotoHero from "./components/PhotoHero";
import NavCluster from "./components/NavCluster";

function App({ main }) {
  return (
    <>
      <div className="container mx-auto p-8  md:mt-12 shadow-2xl rounded-lg md:max-w-5xl xl:max-w-6xl md:mb-8">
        <PhotoHero />
        <NavCluster />
        <main>{main}</main>
      </div>
    </>
  );
}

export default App;
