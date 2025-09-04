import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlurBlob from "./components/BlurBlob";

function App() {
  return (
    <Box bg="#050414" position="relative" minH="100vh" overflow="hidden">
      {/* Blur Effect */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid Background with Mask */}
      <Box
        position="absolute"
        inset="0"
        bg={`
          linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
          linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)
        `}
        bgSize="14px 24px"
        sx={{
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      {/* Main Content */}
      <Box position="relative" pt="20">
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
