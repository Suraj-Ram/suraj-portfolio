import { S, LinkWrapper, Italics } from "../components/TypoUtils";

const projects = [
  {
    id: 0,
    title: "Siglo - Reinvent your input.",
    date: "February 2022",
    listDescription: [
      <span>
        A <S>Python</S> and <S>OpenCV</S> program that controls a computer using
        gestures captured by the webcam.
      </span>,
      "Won most technically challenging product at HackBeanPot 2022 🏆.",
      `Supported gestures for controlling arrow keys, horizontal and vertical scrolling for going 
            through presentations, seeking video playback and simply just scrolling through web pages.`,
      <span>
        The program classifies gestures by interpreting 21 key hand landmarks
        provided by a pre-trained neural network from{" "}
        <S>
          <LinkWrapper link={"https://google.github.io/mediapipe/"}>
            MediaPipe
          </LinkWrapper>
        </S>{" "}
        (a Google CV library).
      </span>,
      <span>
        Read full listing on{" "}
        <LinkWrapper link={"https://devpost.com/software/siglo"}>
          Devpost
        </LinkWrapper>
      </span>,
    ],
  },
  {
    id: 1,
    title: "Java Image Editor",
    date: "June 2022",
    listDescription: [
      <span>
        An image editor written in <S>Java 8</S> that applies a variety of
        filters using matrix operations.
      </span>,
      "Utilizes the MVC architecture to decouple the Model, View and Controller.",
      "The application supports common image types and .ppm images.",
      <span>
        Can be interacted with using the GUI (made using <S>Swing</S>) and via
        the console through text inputs
      </span>,
      <Italics>Code is private, but can be made public upon request.</Italics>,
    ],
  },
  {
    id: 2,
    title: "AudiNote - Notes with Voice",
    date: "Octobber 2021",
    listDescription: [
      <span>
        A minimalist note-taking web app, written in <S>Javascript</S>, that
        transcribes spoken notes using the{" "}
        <S>
            <LinkWrapper link="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">Web Speech API</LinkWrapper>
        </S>
      </span>,
      <span>
        It stores a collection of notes that can be modified in the future and
        persists them in the LocalStorage.
      </span>,
    ],
  },
];

export default projects;
