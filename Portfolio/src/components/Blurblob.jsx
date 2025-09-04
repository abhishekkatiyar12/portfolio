// components/BlurBlob.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; // ✅ Correct import

// Keyframes for blob animation (like animate-blob in Tailwind)
const blob = keyframes`
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
`;

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      w={width}
      h={height}
      transform="translate(-50%, -50%)"
      zIndex={0}
    >
      <Box
        w="full"
        h="full"
        bg="purple.500"
        borderRadius="full"
        opacity={0.2}
        filter="blur(60px)"
        animation={`${blob} 10s infinite ease-in-out`}
      />
    </Box>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
