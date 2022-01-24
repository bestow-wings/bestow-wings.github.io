import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import chess_ai_gif from "./img/chess_ai.gif"
import titanic_img from "./img/titanic.jpg"

const projects = [
  {
    id: 1, 
    title: "Chess AI",
    description: "Playable Chess AI with TensorFlow",
    imgsrc: chess_ai_gif,
    link: "//medium.com/@dylanjsw/playable-chess-ai-with-tensorflow-26c318207452"
  },
  {
    id: 2,
    title: "Titanic Survivor",
    description: "Native JavaScript TensorFlowJS implementation",
    imgsrc: titanic_img,
    link: "/titanic-survivor"
  },
  {
    id: 3, 
    title: "Stakeholder Relationship Manager (SRM)",
    description: "A relationship manager that treats stakeholders like people",
    imgsrc:"",
    link: "/stakeholder-manager"
  },
  {
    id: 4, 
    title: "Project 4",
    description: "A project",
    imgsrc:"",
    link: "/"
  }
]

const social_links = [
  {
    key: 1,
    text: "Medium",
    link: "//medium.com/@dylanjsw"
  },
  {
    key: 2,
    text: "GitHub",
    link: "//github.com/bestow-wings/"
  }
]

function Home() {
  return (
    <div>
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

export default Home;
