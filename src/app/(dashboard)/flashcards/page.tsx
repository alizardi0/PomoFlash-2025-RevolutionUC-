"use client";
import { Editable, Box, SimpleGrid } from "@chakra-ui/react";



export default function Flashcards() {
  return (
    <>
      <Box borderRadius="xl" maxW="38rem" h="20rem" px={30} marginTop="7rem" shadow="2xl" mx="auto" display="flex">
        <Editable.Root textAlign="center" m="auto" placeholder="Type your study question here">
          <Editable.Preview fontSize="2.1rem" lineHeight={1.2} w="full" h="full" />
          <Editable.Textarea fontSize="2.1rem" padding="3rem" h="full" lineHeight={1.2} />
        </Editable.Root>
      </Box>
      <Box h="33rem" w="80rem" borderRadius="xl" marginTop="5rem" outlineColor="black" mx="auto" flexWrap="wrap" display="flex" justifyContent="center" position="relative" placeItems="center">
        <SimpleGrid columns={2} flexWrap="wrap" gap={12} overflow="hidden" marginTop="5rem">
          <Box h="full" bg="blue.500" w="28rem" shadow="xl">
            <Editable.Root autoResize={true} textAlign="center" verticalAlign="middle" placeholder="Type your answer here">
              <Editable.Preview fontSize="1.1rem" lineHeight={0.5} textAlign="center" />
              <Editable.Textarea fontSize="1.1rem" lineHeight={0.2} />
            </Editable.Root>
          </Box>
          <Box borderRadius="xl" bg="green.500" h="12.5rem" w="28rem" shadow="xl">
            <Editable.Root textAlign="center" placeholder="Type your answer here">
              <Editable.Preview fontSize="1.1rem" lineHeight={0.5} w="full" h="full" textAlign="center" />
              <Editable.Textarea fontSize="1.1rem" padding="3rem" h="full" lineHeight={0.2} display="block" marginY="auto" />
            </Editable.Root>
          </Box>
          <Box borderRadius="xl" bg="red.500" h="12.5rem" w="28rem" shadow="xl">
            <Editable.Root textAlign="center" placeholder="Type your answer here">
              <Editable.Preview fontSize="1.1rem" lineHeight={0.5} w="full" h="full" />
              <Editable.Textarea fontSize="1.1rem" padding="3rem" h="full" lineHeight={0.2} />
            </Editable.Root>
          </Box>
          <Box borderRadius="xl" bg="purple.500" h="12.5rem" w="28rem" shadow="xl">
            <Editable.Root textAlign="center" placeholder="Type your answer here">
              <Editable.Preview fontSize="1.1rem" lineHeight={0.5} w="full" h="full" />
              <Editable.Textarea fontSize="1.1rem" padding="3rem" h="full" lineHeight={0.2} />
            </Editable.Root>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
