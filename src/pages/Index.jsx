import { Box, Container, Flex, VStack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleGrid from "../components/ArticleGrid";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={10}>
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <Box flex="3">
            <Box mb={6}>
              <Text fontSize="2xl" fontWeight="bold">Featured Article</Text>
              <Text mt={2}>This is a brief description of the featured article...</Text>
            </Box>
            <ArticleGrid />
          </Box>
          <Box flex="1">
            <Sidebar />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;