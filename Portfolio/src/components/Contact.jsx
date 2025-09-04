import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";   // ✅ MODIFICATION: Imported Chakra components

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a", // Replace with your EmailJS Service ID
        "template_1ziboq3", // Replace with your EmailJS Template ID
        form.current,
        "Rz7W9pVF0HdDryNNL" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <Box
      as="section"
      id="contact"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={24}
      px={{ base: "12vw", md: "7vw", lg: "20vw" }}
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <Box textAlign="center" mb={16}>
        <Heading as="h2" size="xl" fontWeight="bold" color="white">
          CONTACT
        </Heading>
        <Divider
          w="8rem"
          borderWidth="2px"
          borderColor="purple.500"
          mx="auto"
          mt={4}
        />  {/* ✅ MODIFICATION: Tailwind div → Chakra Divider */}
        <Text color="gray.400" mt={4} fontSize="lg" fontWeight="semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </Text>
      </Box>

      {/* Contact Form */}
      <Box
        mt={8}
        w="full"
        maxW="md"
        bg="#0d081f"
        p={6}
        rounded="lg"
        shadow="lg"
        border="1px solid"
        borderColor="gray.700"
      >
        <Heading as="h3" size="md" color="white" textAlign="center">
          Connect With Me 🚀
        </Heading>

        <Box as="form" ref={form} onSubmit={sendEmail} mt={4}>
          <VStack spacing={4} align="stretch">
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              bg="#131025"
              color="white"
              borderColor="gray.600"
              _focus={{ borderColor: "purple.500" }}
            /> {/* ✅ MODIFICATION: Tailwind input → Chakra Input */}

            <Input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              bg="#131025"
              color="white"
              borderColor="gray.600"
              _focus={{ borderColor: "purple.500" }}
            />

            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              bg="#131025"
              color="white"
              borderColor="gray.600"
              _focus={{ borderColor: "purple.500" }}
            />

            <Textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              bg="#131025"
              color="white"
              borderColor="gray.600"
              _focus={{ borderColor: "purple.500" }}
            /> 

            {/* Send Button */}
            <Button
              type="submit"
              w="full"
              py={6}
              color="white"
              fontWeight="semibold"
              rounded="md"
              bgGradient="linear(to-r, purple.600, pink.500)"
              _hover={{ opacity: 0.9 }}
              transition="0.3s"
            >
              Send
            </Button> 
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
