import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      w="100%"
      zIndex="50"
      px={{ base: "5vw", md: "7vw", lg: "20vw" }}
      transition="all 0.3s"
      bg={isScrolled ? "rgba(5,4,20,0.5)" : "transparent"}
      backdropFilter={isScrolled ? "blur(10px)" : "none"}
      boxShadow={isScrolled ? "md" : "none"}
    >
      <Flex
        color="white"
        py={5}
        justify="space-between"
        align="center"
      >
        {/* Logo */}
        <Text fontSize="lg" fontWeight="semibold" cursor="pointer">
          <Text as="span" color="purple.400">
            &lt;
          </Text>
          Abhishek
          <Text as="span" color="purple.400">
            /
          </Text>
          Katiyar
          <Text as="span" color="purple.400">
            &gt;
          </Text>
        </Text>

        {/* Desktop Menu */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          color="gray.300"
        >
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="link"
              onClick={() => handleMenuItemClick(item.id)}
              color={
                activeSection === item.id ? "purple.400" : "gray.300"
              }
              _hover={{ color: "purple.400" }}
            >
              {item.label}
            </Button>
          ))}
        </HStack>

        {/* Social Icons (Desktop) */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link
            href="https://github.com/abhishekkatiyar12/"
            isExternal
            color="gray.300"
            _hover={{ color: "purple.400" }}
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/contactabhishekk/"
            isExternal
            color="gray.300"
            _hover={{ color: "purple.400" }}
          >
            <FaLinkedin size={24} />
          </Link>
        </HStack>

        {/* Mobile Menu Icon */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={isOpen ? <FiX /> : <FiMenu />}
            onClick={() => setIsOpen(!isOpen)}
            color="purple.400"
            fontSize="2xl"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            aria-label="Menu Toggle"
          />
        </Box>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          position="absolute"
          top="4rem"
          left="50%"
          transform="translateX(-50%)"
          w="80%"
          bg="rgba(5,4,20,0.5)"
          backdropFilter="blur(12px)"
          borderRadius="lg"
          shadow="lg"
          py={4}
          display={{ md: "none" }}
        >
          <VStack spacing={4} color="gray.300">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="link"
                onClick={() => handleMenuItemClick(item.id)}
                color={
                  activeSection === item.id ? "purple.400" : "gray.300"
                }
                _hover={{ color: "purple.400" }}
              >
                {item.label}
              </Button>
            ))}

            {/* Mobile Socials */}
            <HStack spacing={4}>
              <Link
                href="https://github.com/abhishek"
                isExternal
                _hover={{ color: "white" }}
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/contactabhishekk/"
                isExternal
                _hover={{ color: "white" }}
              >
                <FaLinkedin size={24} />
              </Link>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
