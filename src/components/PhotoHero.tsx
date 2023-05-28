const S = ({ children }) => <strong>{children}</strong>


export default function PhotoHero() {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between md:mx-4 mb-10 items-center">
          <div className="flex flex-col max-w-xl gap-2 order-2">
            <span className="text-lg text-myGray-400 ">Hi, I'm 👋</span>
            <span className="text-4xl md:text-5xl lg:text-6xl text-main-600 font-bold tracking-tight">
              Suraj Ramchandran
            </span>
  
            <span className="text-lg text-myGray-700 text-">
              I am a second-year Computer Science (B.S.) student at Northeastern
              University interested in <S>Artificial Intelligence</S> and{" "}
              <S>Full-stack Web Development</S>.
            </span>
            {/* <SocialLinks /> */}
          </div>
  
          {/* <Headshot picture={headshotPic} /> */}
        </div>
      </>
    );
  }