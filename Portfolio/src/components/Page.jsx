import { Box } from "@chakra-ui/react";
import Layout from "./Layout";

const Page = () => {
  return (
    <Box
      minH="100vh"
      bg="black"
      color={"white"}
      backgroundImage={`
        linear-gradient(to right, #1e1e1eff 1px, transparent 1px),
        linear-gradient(to bottom, #232323ff 1px, transparent 1px)
      `}
      backgroundSize="10px 10px"
    >
      <Layout />
    </Box>
  );
};

export default Page;
