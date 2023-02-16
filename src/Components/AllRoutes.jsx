import {Routes,Route} from "react-router-dom"
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

function AllRoutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
}

export default AllRoutes;