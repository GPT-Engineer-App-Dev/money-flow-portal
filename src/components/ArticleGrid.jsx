import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const ArticleGrid = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
      <GridItem>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/240" alt="Article Image" />
          <Box p={4}>
            <Text fontWeight="bold" fontSize="lg">Article Title</Text>
            <Text mt={2}>Brief description of the article...</Text>
          </Box>
        </Box>
      </GridItem>
      {/* Repeat similar blocks for more articles */}
    </Grid>
  );
};

export default ArticleGrid;