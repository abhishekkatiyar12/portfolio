import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    school: "KIET Group of Institutions, Ghaziabad",
    date: "2023 – 2025 (Pursuing)",
    grade: "Ongoing",
    desc: "Specializing in software development, backend engineering, and modern web technologies including MERN and Next.js.",
    img: "/images/kiet.png", // 🔑 Replace with actual KIET logo path
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    date: "2020 – 2023",
    grade: "First Division",
    desc: "Built strong foundations in programming, databases, and operating systems while also working on practical projects.",
    img: "/images/csjmu.png", // 🔑 Replace with actual CSJMU logo path
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    school: "Kanpur, Uttar Pradesh",
    date: "2018 – 2020",
    grade: "PCM Stream",
    desc: "Focused on Mathematics and Computer Science which ignited my interest in pursuing a career in technology.",
    img: "/images/school.png", // 🔑 Replace with actual school logo
  },
];

const Education = () => {
  return (
    <Box
      as="section"
      id="education"
      py={24}
      px={{ base: "12vw", md: "7vw", lg: "16vw" }}
      fontFamily="sans-serif"
      bgGradient="linear(to-r, gray.900, gray.800)"
      position="relative"
      overflow="hidden"
    >
      {/* Section Title */}
      <Box textAlign="center" mb={16}>
        <Heading as="h2" size="xl" fontWeight="bold" color="white">
          EDUCATION
        </Heading>
        <Divider
          w="8rem"
          borderWidth="2px"
          borderColor="purple.500"
          mx="auto"
          mt={4}
        />
        <Text color="gray.400" mt={4} fontSize="lg" fontWeight="semibold">
          My education has been a journey of learning and growth. Here’s a look
          at my academic background:
        </Text>
      </Box>

      {/* Education Timeline */}
      <Box position="relative">
        {/* Vertical line */}
        <Box
          position="absolute"
          left={{ base: "0", sm: "50%" }}
          transform={{ base: "translateX(-50%)", sm: "none" }}
          w="2px"
          h="full"
          bg="white"
        />

        {/* Education Entries */}
        {education.map((edu, index) => (
          <Flex
            key={edu.id}
            direction={{ base: "column", sm: "row" }}
            align="center"
            justify={index % 2 === 0 ? "flex-start" : "flex-end"}
            mb={16}
            position="relative"
          >
            {/* Timeline Circle */}
            <Flex
              position="absolute"
              left={{ base: "0", sm: "50%" }}
              transform="translateX(-50%)"
              bg="gray.400"
              border="4px solid"
              borderColor="purple.600"
              w={{ base: "3rem", sm: "4rem" }}
              h={{ base: "3rem", sm: "4rem" }}
              rounded="full"
              justify="center"
              align="center"
              zIndex={10}
            >
              <Image
                src={edu.img}
                alt={edu.school}
                w="full"
                h="full"
                rounded="full"
                objectFit="cover"
              />
            </Flex>

            {/* Content Section */}
            <Box
              w="full"
              maxW="md"
              p={{ base: 4, sm: 8 }}
              ml={{ base: 8, sm: "11rem" }}
              mr={{ sm: "11rem" }}
              rounded="2xl"
              shadow="2xl"
              border="1px solid"
              borderColor="white"
              bg="gray.900"
              backdropFilter="blur(10px)"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              {/* Flex container for image and text */}
              <Flex align="center" gap={6}>
                {/* School Logo/Image */}
                <Box w="6rem" h="4rem" bg="white" rounded="md" overflow="hidden">
                  <Image
                    src={edu.img}
                    alt={edu.school}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>

                {/* Degree, School Name, and Date */}
                <Box>
                  <Heading as="h3" size="md" fontWeight="semibold" color="white">
                    {edu.degree}
                  </Heading>
                  <Text fontSize="sm" color="gray.300">
                    {edu.school}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mt={2}>
                    {edu.date}
                  </Text>
                </Box>
              </Flex>

              <Text mt={4} color="gray.400" fontWeight="bold">
                Grade: {edu.grade}
              </Text>
              <Text mt={4} color="gray.400">
                {edu.desc}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
