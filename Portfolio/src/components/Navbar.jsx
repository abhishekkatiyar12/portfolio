import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="black" w="100%" px={6} py={4} color="white" h="70px">
      <Flex justify="space-between" align="center" h="100%">
        {/* Left side: Name */}
        <Text fontWeight="bold" fontSize="xl">
          Abhishek Katiyar
        </Text>

        {/* Right side: Menu */}
        <HStack as="ul" spacing={6} listStyleType="none" m={0} px={20}>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Education</li>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
