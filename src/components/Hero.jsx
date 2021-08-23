//import Bio from "./Bio";
import Blob from "./Blob";

const Hero = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-300 to-white">
      <div className="container mx-auto px-4 py-2">
        <div className="mb-16">
          <div className="flex justify-between items-center lg:justify-start lg:gap-4">
            <section className="">
              <h1
                className="font-bold text-3xl md:text-5xl xl:text-6xl md:pt-4 xl:pt-8 tracking-tight mb-4 lg:mb-8 text-black dark:text-white"
                id="title"
              >
                Hey, I'm Suraj
              </h1>
              <p className="prose text-gray-600 max-w-xl dark:text-gray-400 mb-14 md:text-lg">
                My interest area is web development, having developed web apps
                and websites using HTML, CSS, Vanilla JS, React, Bootstrap and
                Tailwind. I am fascinated particularly fascinated by AI and
                machine learning and the paradigm shift it brings to problem
                solving.
              </p>
            </section>
            <section className="lg:mx-auto">
              <Blob color="#9CA3AF" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;