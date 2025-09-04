// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../Constant"; 
import Tilt from "react-parallax-tilt";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
} from "@chakra-ui/react";

const Skills = () => (
  <Box
    as="section"
    id="skills"
    py={24}
    px={{ base: "12vw", md: "7vw", lg: "20vw" }}
    fontFamily="sans-serif"
    bgGradient="linear(to-r, gray.900, gray.800)"
    clipPath="polygon(0 0, 100% 0, 100% 100%, 0 95%)"
  >
    {/* Section Title */}
    <Box textAlign="center" mb={8}>
      <Heading
        as="h2"
        fontSize={{ base: "3xl", sm: "4xl" }}
        fontWeight="bold"
        color="white"
      >
        SKILLS
      </Heading>
      <Box w="6rem" h="2px" bg="#8245ec" mx="auto" mt={2} />
      <Text
        color="gray.400"
        mt={4}
        fontSize="lg"
        fontWeight="semibold"
        maxW="3xl"
        mx="auto"
      >
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </Text>
    </Box>

    {/* Skill Categories */}
    <Flex wrap="wrap" gap={{ base: 2, lg: 5 }} py={10} justify="space-between">
      {SkillsInfo.map((category) => (
        <Box
          key={category.title}
          bg="gray.900"
          backdropFilter="blur(10px)"
          px={{ base: 6, sm: 10 }}
          py={{ base: 8, sm: 6 }}
          mb={10}
          w={{ base: "100%", sm: "48%" }}
          rounded="2xl"
          border="1px solid"
          borderColor="whiteAlpha.300"
          boxShadow="0 0 20px 1px rgba(130,69,236,0.3)"
        >
          <Heading
            as="h3"
            fontSize={{ base: "2xl", sm: "3xl" }}
            fontWeight="semibold"
            color="gray.400"
            mb={4}
            textAlign="center"
          >
            {category.title}
          </Heading>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={3} w="full">
              {category.skills.map((skill) => (
                <Flex
                  key={skill.name}
                  align="center"
                  justify="flex-start"
                  gap={3}
                  border="2px solid"
                  borderColor="gray.700"
                  rounded="3xl"
                  py={2}
                  px={3}
                  bg="transparent"
                >
                  <Box
                    w={{ base: "28px", sm: "32px" }}
                    h={{ base: "28px", sm: "32px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      boxSize="100%"
                      objectFit="contain"
                    />
                  </Box>
                  <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.300">
                    {skill.name}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Tilt>
        </Box>
      ))}
    </Flex>
  </Box>
);

export default Skills;
