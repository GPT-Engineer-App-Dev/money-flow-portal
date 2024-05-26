import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">Financial Times</Text>
        <Spacer />
        <Flex>
          <Link px={2} href="#">Home</Link>
          <Link px={2} href="#">World</Link>
          <Link px={2} href="#">Business</Link>
          <Link px={2} href="#">Markets</Link>
          <Link px={2} href="#">Opinion</Link>
          <Link px={2} href="#">Tech</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;