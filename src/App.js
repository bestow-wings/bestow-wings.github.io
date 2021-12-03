import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"

const projects = [
  {
    id: 1, 
    title: "Project 1",
    description: "A project"
  },
  {
    id: 2,
    title: "Project 2",
    description: "A project"
  },
  {
    id: 3, 
    title: "Project 3",
    description: "A project"
  },
  {
    id: 4, 
    title: "Project 4",
    description: "A project"
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
      <div>
        <Navbar />
      </div>
      <div style={{width: "75%", justifyContent: "center", margin: "auto"}}>
        <Hero />
        <Cards data={projects} />
        <p>Some information</p>
        <Cards data ={services} />
        <p>Hello, world</p>
      </div>
    </div>
  
  );
}

export default App;
