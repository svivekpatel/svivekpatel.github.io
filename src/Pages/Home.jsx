import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Github from "./Github";
import Projects from "./Projects";
import Skills from "./Skills";
import navStyles from "./home.module.css";

function Home(){
    return <div bg={"black"} id="home">
        <div className={navStyles.mySidenav}>
  <a href="#" className={navStyles.about}>About</a>
  <a href="#" className={navStyles.blog}>Blog</a>
  <a href="#" className={navStyles.projects}>Projects</a>
  <a href="#" className={navStyles.contact}>Contact</a>
</div>

       <Navbar/>
       <About/>
       <Projects/>
       <Github/>
       <Skills/>
       <Contact/>
    </div>
}

export default Home;