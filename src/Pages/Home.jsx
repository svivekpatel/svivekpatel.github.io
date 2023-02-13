import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import About from "./About";
import Github from "./Github";
import Projects from "./Projects";
import Skills from "./Skills";

function Home(){
    return <div bg={"black"}>
       <Navbar/>
       <About/>
       <Projects/>
       <Github/>
       <Skills/>
    </div>
}

export default Home;