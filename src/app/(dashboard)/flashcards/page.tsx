"use client";
import { Editable, Box, VStack } from "@chakra-ui/react";

import { MultipleChoiceInput } from "@/components/MultipleChoiceInput";



export default function Flashcards() {
  return (
    <>
      <Box maxW="38rem" mx="auto">
        <Box borderRadius="xl" h="20rem" px={30} marginTop="3rem" shadow="2xl" display="flex">
          <Editable.Root textAlign="center" m="auto" placeholder="Type your study question here">
            <Editable.Preview fontSize="2.1rem" lineHeight={1.2} w="full" h="full" />
            <Editable.Textarea fontSize="2.1rem" padding="3rem" h="full" lineHeight={1.2} />
          </Editable.Root>
        </Box>
        <Box mt="2rem">
          <VStack>
            <MultipleChoiceInput background="blue.500" editableProps={{ onValueCommit: () => { } }} />
            <MultipleChoiceInput background="green.500" editableProps={{ onValueCommit: () => { } }} />
            <MultipleChoiceInput background="red.500" editableProps={{ onValueCommit: () => { } }} />
            <MultipleChoiceInput background="purple.500" editableProps={{ onValueCommit: () => { } }} />
          </VStack>
        </Box>
      </Box>
    </>
  );
}
