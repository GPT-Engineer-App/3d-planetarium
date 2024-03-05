import { Box, Center, Container, VStack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const cardBgColor = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="container.xl" p={4}>
      <Center height="100vh">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            Welcome to the 3D Effect Website
          </Heading>
          <Box
            bg={cardBgColor}
            w="sm"
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            _hover={{
              transform: "rotateY(20deg)",
              transition: "transform 0.5s",
            }}
            style={{ perspective: "1000px" }} // Needed for 3D effect on transform
          >
            <VStack spacing={4}>
              <FaReact size="3em" />
              <Text fontSize="xl">Hover over this card to see a simple 3D effect!</Text>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </Container>
  );
};

export default Index;
