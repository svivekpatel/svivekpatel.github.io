import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Github from "./Github";
import Projects from "./Projects";
import Side from "./Side";
import Skills from "./Skills";

function Home(){
    return <div bg={"black"} id="home">
       <Side/>
       <Navbar/>
       <About/>
       <Projects/>
       <Github/>
       <Skills/>
       <Contact/>
    </div>
}

export default Home;