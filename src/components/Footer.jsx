import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={6} mt={10}>
      <Flex direction="column" align="center">
        <Text mb={2}>© 2023 Financial Times</Text>
        <Flex>
          <Link px={2} href="#">About</Link>
          <Link px={2} href="#">Contact</Link>
          <Link px={2} href="#">Privacy Policy</Link>
          <Link px={2} href="#">Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;