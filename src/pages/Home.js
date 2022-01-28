import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import chess_ai_gif from "./img/chess_ai.gif"
import titanic_img from "./img/titanic.jpg"
import srm_img from "./img/srm.jpeg"
import vege_img from "./img/veges.jpg"

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
    title: "Stakeholder Manager",
    description: "Who needs Sales Force?",
    imgsrc:srm_img,
    link: "/stakeholder-manager"
  },
  {
    id: 4, 
    title: "Shopping List Generator",
    description: "Pick your meals and get your ingredients sent to you",
    imgsrc:vege_img,
    link: "/shopping-list-generator"
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
