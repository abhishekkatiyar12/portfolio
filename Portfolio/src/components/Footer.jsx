import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box as="footer" color="white" py={8} px={{ base: "12vw", md: "7vw", lg: "20vw" }}>
      <Box textAlign="center">
        {/* Name / Logo */}
        <Heading as="h2" size="md" fontWeight="semibold" color="purple.400">
          Abhishek Katiyar
        </Heading>

        {/* Navigation Links */}
        <Flex
          justify="center"
          flexWrap="wrap"
          mt={4}
          gap={{ base: 2, sm: 4 }}
        >
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <Button
              key={index}
              variant="link"
              color="white"
              fontSize={{ base: "sm", sm: "md" }}
              _hover={{ color: "purple.400" }}
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </Button>
          ))}
        </Flex>

        {/* Social Media Icons */}
        <Flex justify="center" mt={6} gap={4} flexWrap="wrap">
          {[
            { icon: <FaFacebook />, link: "https://facebook.com/" },
            { icon: <FaTwitter />, link: "https://twitter.com/" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/abhishek-katiyar" },
            { icon: <FaInstagram />, link: "https://instagram.com/" },
            { icon: <FaYoutube />, link: "https://youtube.com/" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              isExternal
              fontSize="xl"
              _hover={{ color: "purple.400", transform: "scale(1.1)" }}
              transition="all 0.2s"
            >
              {item.icon}
            </Link>
          ))}
        </Flex>

        {/* Copyright */}
        <Text fontSize="sm" color="gray.400" mt={6}>
          © 2025 Abhishek Katiyar. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
