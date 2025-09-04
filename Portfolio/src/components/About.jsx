import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useMemo } from "react";

const About = () => {
  // Array of profile picture URLs
  const profilePics = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/76.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "https://randomuser.me/api/portraits/men/55.jpg",
  ];

  // Pick a random image once per visit (useMemo so it doesn’t change on re-renders)
  const randomPic = useMemo(() => {
    const index = Math.floor(Math.random() * profilePics.length);
    return profilePics[index];
  }, []);

  return (
    <Box h="500px" py="50px" px="50px" bg="blackAlpha.400" color="white">
      <Flex h="100%" justify="space-evenly" align="center">
        {/* Left side: About text */}
        <Box w="50%" pr={10}>
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            About Me
          </Text>
          <Text fontSize="md" lineHeight="tall">
            Hi, I’m Abhishek Katiyar. I am a passionate software developer with
            a strong focus on backend and full-stack development. I enjoy
            building impactful applications, learning new technologies, and
            solving real-world problems with clean and efficient code.
          </Text>
        </Box>

        {/* Right side: Profile Picture */}
        <Box w="40%" display="flex" justifyContent="center">
          <Image
            src={randomPic}
            alt="Profile"
            borderRadius="full"
            boxSize="250px"
            objectFit="cover"
            border="4px solid white"
            shadow="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
