// src/components/Work.jsx
import React, { useState } from "react";
import { projects } from "../Constant";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
} from "@chakra-ui/react";

const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box
      as="section"
      id="work"
      py={24}
      px={{ base: "12vw", md: "7vw", lg: "20vw" }}
      fontFamily="sans-serif"
      position="relative"
    >
      {/* Section Title */}
      <Box textAlign="center" mb={16}>
        <Heading as="h2" size="2xl" fontWeight="bold" color="white">
          PROJECTS
        </Heading>
        <Box w="8rem" h="2px" bg="purple.500" mx="auto" mt={4} />
        <Text color="gray.400" mt={4} fontSize="lg" fontWeight="semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </Text>
      </Box>

      {/* Projects Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12}>
        {projects.map((project) => (
          <Box
            key={project.id}
            onClick={() => handleOpenModal(project)}
            cursor="pointer"
            border="1px solid"
            borderColor="whiteAlpha.400"
            bg="gray.900"
            rounded="2xl"
            shadow="2xl"
            _hover={{
              shadow: "0 0 20px rgba(130,69,236,0.5)",
              transform: "translateY(-8px)",
            }}
            transition="all 0.3s"
          >
            <Box p={4}>
              <Image
                src={project.image}
                alt={project.title}
                w="full"
                h="12rem"
                objectFit="cover"
                rounded="xl"
              />
            </Box>
            <Box p={6}>
              <Heading as="h3" size="lg" color="white" mb={2}>
                {project.title}
              </Heading>
              <Text noOfLines={3} color="gray.400" fontSize="sm" mb={4}>
                {project.description}
              </Text>

              {/* Tags with logos */}
              <Flex wrap="wrap" gap={2}>
                {project.tags.map((tag, index) => (
                  <Flex
                    key={index}
                    align="center"
                    gap={2}
                    px={3}
                    py={1}
                    bg="rgba(130,69,236,0.1)"
                    border="1px solid"
                    borderColor="purple.500"
                    rounded="full"
                    boxShadow="sm"
                    _hover={{ bg: "rgba(130,69,236,0.2)" }}
                    transition="all 0.2s ease"
                  >
                    {tag.logo && (
                      <Image
                        src={tag.logo}
                        alt={tag.name}
                        boxSize="16px"
                        objectFit="contain"
                      />
                    )}
                    <Text fontSize="sm" color="purple.300" fontWeight="medium">
                      {tag.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal */}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
          <ModalOverlay bg="blackAlpha.900" />
          <ModalContent
            bg="gray.900"
            rounded="xl"
            shadow="2xl"
            overflow="hidden"
          >
            <ModalCloseButton color="white" fontSize="2xl" />
            <ModalBody p={0}>
              <Box>
                <Flex justify="center" bg="gray.900" px={4} pt={6}>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    w="95%"
                    rounded="xl"
                    shadow="2xl"
                    objectFit="contain"
                  />
                </Flex>
                <Box p={{ base: 6, lg: 8 }}>
                  <Heading as="h3" size="lg" color="white" mb={4}>
                    {selectedProject.title}
                  </Heading>
                  <Text
                    color="gray.400"
                    mb={6}
                    fontSize={{ base: "sm", lg: "md" }}
                  >
                    {selectedProject.description}
                  </Text>

                  {/* Modal tags */}
                  <Flex wrap="wrap" gap={2} mb={6}>
                    {selectedProject.tags.map((tag, index) => (
                      <Flex
                        key={index}
                        align="center"
                        gap={2}
                        px={3}
                        py={1}
                        bg="rgba(130,69,236,0.1)"
                        border="1px solid"
                        borderColor="purple.500"
                        rounded="full"
                        boxShadow="sm"
                        _hover={{ bg: "rgba(130,69,236,0.2)" }}
                        transition="all 0.2s ease"
                      >
                        {tag.logo && (
                          <Image
                            src={tag.logo}
                            alt={tag.name}
                            boxSize="16px"
                            objectFit="contain"
                          />
                        )}
                        <Text
                          fontSize="sm"
                          color="purple.300"
                          fontWeight="medium"
                        >
                          {tag.name}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>

                  <Stack direction="row" spacing={4}>
                    <Button
                      as="a"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      flex="1"
                      bg="gray.800"
                      _hover={{ bg: "purple.800" }}
                      color="gray.300"
                      fontWeight="semibold"
                    >
                      View Code
                    </Button>
                    <Button
                      as="a"
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      flex="1"
                      bg="purple.600"
                      _hover={{ bg: "purple.800" }}
                      color="white"
                      fontWeight="semibold"
                    >
                      View Live
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Project;
