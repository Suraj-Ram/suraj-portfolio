//import Bio from "./Bio";
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
              <svg
                fill="#9CA3AF"
                // use "#111827" for dark mode
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-full"
              >
                <path
                  fill=""
                  d="M41.6,-61.3C55.3,-55.9,68.7,-46.7,72.7,-34.3C76.7,-21.8,71.3,-6.2,67.4,8.5C63.5,23.3,61.1,37.1,54.1,49.1C47.1,61.1,35.5,71.2,22.7,72.9C9.9,74.6,-4,68,-17.1,62.3C-30.2,56.6,-42.4,52,-52.3,43.6C-62.2,35.2,-69.7,23.2,-74.7,8.9C-79.6,-5.4,-81.9,-21.9,-74.7,-32.6C-67.4,-43.2,-50.7,-48,-36.6,-53.2C-22.6,-58.4,-11.3,-64.1,1.3,-66.2C13.9,-68.2,27.9,-66.7,41.6,-61.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
