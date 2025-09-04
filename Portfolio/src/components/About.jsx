// About.jsx
import { Box, Flex, Heading, Text, Button, Link, Image } from "@chakra-ui/react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/ABHISHEK_PICTURE.jpg"; // ✅ Your picture

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      py={4}
      px={{ base: "7vw", md: "7vw", lg: "20vw" }}
      fontFamily="sans-serif"
      mt={{ base: 16, md: 24, lg: 32 }}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        justify="space-between"
        align="center"
      >
        {/* Left Side */}
        <Box
          w={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 8, md: 0 }}
        >
          {/* Greeting */}
          <Heading
            as="h1"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            fontWeight="bold"
            color="white"
            mb={2}
            lineHeight="short"
          >
            Hi, I am
          </Heading>

          {/* Name */}
          <Heading
            as="h2"
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            fontWeight="bold"
            color="white"
            mb={4}
            lineHeight="short"
          >
            Abhishek Katiyar
          </Heading>

          {/* Typing Effect */}
          <Heading
            as="h3"
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="semibold"
            mb={4}
            color="#8245ec"
            lineHeight="short"
          >
            <Box as="span" color="white">
              I am a{" "}
            </Box>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Backend Developer",
                "MERN Enthusiast",
                "Problem Solver",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <Box as="span" color="#8245ec">
                  {cursor}
                </Box>
              )}
            />
          </Heading>

          {/* About Me */}
          <Text
            fontSize={{ base: "md", sm: "lg" }}
            color="gray.400"
            mb={10}
            mt={8}
            lineHeight="tall"
          >
            I am a passionate software developer specializing in the MERN stack
            with strong backend expertise in Node.js, Express, and MongoDB.
            Currently pursuing MCA at KIET, I focus on building scalable APIs,
            real-time applications, and solving challenging problems in web
            development.
          </Text>

          {/* Resume Button */}
          <Link
            href="https://drive.google.com/file/d/1dd8IiWEHThSxhCCifVGwwSmzK69KuwtB/view?usp=drive_link"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button
              size="lg"
              fontWeight="bold"
              rounded="full"
              px={8}
              py={6}
              mt={5}
              color="white"
              transition="all 0.3s"
              _hover={{ transform: "scale(1.05)" }}
              bgGradient="linear(to-r, #8245ec, #a855f7)"
              boxShadow="0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec"
            >
              DOWNLOAD CV
            </Button>
          </Link>
        </Box>

        {/* Right Side (Tilt Image) */}
       {/* Right Side (Tilt Image) */}
<Flex
  w={{ base: "100%", md: "50%" }}
  justify={{ base: "center", md: "flex-end" }}
>
  <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope={true}
    style={{
      borderRadius: "50%",
      border: "4px solid #6b21a8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden", // ✅ ensures image stays inside circle
      width: "16rem",     // default size
      height: "16rem",
    }}
  >
    <Image
      src={profileImage}
      alt="Abhishek Katiyar"
      borderRadius="full"
      objectFit="cover"
      w="100%"
      h="100%"
      boxShadow="0 10px 20px rgba(130,69,236,0.5)"
    />
  </Tilt>
</Flex>

      </Flex>
    </Box>
  );
};

export default About;
