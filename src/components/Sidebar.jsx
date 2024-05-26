import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box>
      <Box mb={6}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>Trending Articles</Text>
        <VStack align="start" spacing={4}>
          <Text>Trending Article 1</Text>
          <Text>Trending Article 2</Text>
          <Text>Trending Article 3</Text>
        </VStack>
      </Box>
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4}>Latest News</Text>
        <VStack align="start" spacing={4}>
          <Text>Latest News 1</Text>
          <Text>Latest News 2</Text>
          <Text>Latest News 3</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;