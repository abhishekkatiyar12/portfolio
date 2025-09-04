import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";

const Layout=()=>{

  return (
    <>
    <Navbar/>
    <About/>
    <Skills/>
    <Project/>
    <Education/>
    <Experience/>
    <Footer/>
    </>
  )
}

export default Layout;