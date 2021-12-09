import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import About from "./components/About"

import chess_ai_gif from "./img/chess_ai.gif"

const projects = [
  {
    id: 1, 
    title: "Chess AI",
    description: "Playable Chess AI with TensorFlow",
    imgsrc: chess_ai_gif,
    link: "https://medium.com/@dylanjsw/playable-chess-ai-with-tensorflow-26c318207452"
  },
  {
    id: 2,
    title: "Project 2",
    description: "A project",
    imgsrc:""
  },
  {
    id: 3, 
    title: "Project 3",
    description: "A project",
    imgsrc:""
  },
  {
    id: 4, 
    title: "Project 4",
    description: "A project",
    imgsrc:""
  }
]

const social_links = [
  {
    text: "Medium",
    link: "https://medium.com/@dylanjsw"
  },
  {
    text: "GitHub",
    link: "https://github.com/bestow-wings/"
  },
  {
    text: "Email",
    link: "mailto:dylanjsw@outlook.com"
  }
]

const nav_links = [
  {
    text: "Home",
    link: "./"
  },
  {
    text: "About",
    link: "https://www.google.com/"
  },
  {
    text: "Contact",
    link: "https://www.google.com/"
  }
]

function App() {
  return (
    <div>
      <div className="banner">
        <div className="logo">aukibit</div>
        <Navbar links={nav_links} />
      </div>
        <Hero />
        <div className="content">
          <Cards data={projects} />
          <div style={{textAlign: "center", marginBottom:"5rem"}}>
            <p>Some information</p>
            <button>Contact</button>
          </div>
          <Navbar links={social_links} />
      </div>
    </div>
  );
}

export default App;
