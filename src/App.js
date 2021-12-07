import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"

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

const services = [
  {
    id: 1, 
    title: "Service 1",
    description: "A service"
  },
  {
    id: 2,
    title: "Service 2",
    description: "A service"
  },
  {
    id: 3, 
    title: "Service 3",
    description: "A service"
  },
  {
    id: 4, 
    title: "Service 4",
    description: "A service"
  }
]

function App() {
  return (
    <div>
      <div className="banner">
        <div className="logo">aukibit</div>
        <Navbar names={["Home", "About", "Contact"]} />
      </div>
        <Hero />
        <div className="content">
          <Cards data={projects} />
          <div style={{textAlign: "center"}}>
            <p>Some information</p>
            <button>Another button</button>
          </div>
          <Cards data ={services} />
          <Navbar names={["Medium", "GitHub", "Email"]} />
      </div>
    </div>
  );
}

export default App;
