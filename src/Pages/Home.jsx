import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import About from "./About";
import Github from "./Github";
import Projects from "./Projects";

function Home(){
    return <div bg={"black"}>
       <Navbar/>
       <About/>
       <Projects/>
       <Github/>
       <Box w={"100%"}h={"2000px"} bg={"black"}></Box>
    </div>
}

export default Home;