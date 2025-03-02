"use client";

import { Box, Heading, Button, Flex } from "@chakra-ui/react";



export default function FlashcardsChallenge() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box width="40vw">
          <Box bg="bg" shadow="md" borderRadius="md" height="30vh" display="flex" justifyContent="center" alignItems="center">
            <Heading fontSize="4xl">Question Placeholder</Heading>
          </Box>
          <br></br>
          <br></br>
          <Flex gap="4" direction="column" width="100%" justifyContent="center" alignItems="center">
            <Button w="full">Option 1</Button>
            <Button w="full">Option 2</Button>
            <Button w="full">Option 3</Button>
            <Button w="full">Option 4</Button>
          </Flex>


        </Box>
      </div>
    </>
  );
}
