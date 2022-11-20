const projects = [
  {
    id: 0,
    title: "Siglo - Reinvent your input.",
    date: "February 2022",
    listDescription: [
      "A Python and OpenCV program that controls a computer using gestures captured by the webcam.",
      "Won most technically challenging product at HackBeanPot 2022 🏆.",
      `Supported gestures for controlling arrow keys, horizontal and vertical scrolling for going 
            through presentations, seeking video playback and simply just scrolling through web pages.`,
      `The program classifies gestures by interpreting 21 key hand landmarks provided by a pre-trained 
            neural network from MediaPipe (a Google CV library).`,
      <span>
        Read full listing on <a href="#">[Devpost!]</a>
      </span>
    ],
  },
  {
    id: 1,
    title: "Java Image Editor",
    date: "June 2022",
    listDescription: [
        "An image editor written in **Java** 8 that applies a variety of filters using matrix operations.",
        "Utilizes the MVC architecture to decouple the Model, View and Controller.",
        "The application supports common image types and .ppm images.",
        "Can be interacted with using the GUI (default) and via the console through text inputs.",
        <em>Code is private, but can be made public upon request.</em>
    ]
  },
  {
    id: 2,
    title: "AudiNote - Notes with Voice",
    date: "Octobber 2021",
    listDescription: [
        <span>A minimalist note-taking web app, written in **Javascript**, that transcribes spoken notes using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition">Web Speech API.</a></span>,
        <span>It stores a collection of notes that can be modified in the future and persists them in the  LocalStorage.</span>
    ]
  }
];

export default projects;
