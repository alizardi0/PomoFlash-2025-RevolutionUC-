import { Box, Heading, Stack } from "@chakra-ui/react";



export interface TaskStackProps {
  title: string;
  children: React.ReactNode;
}

export function TaskStack({ title, children }: TaskStackProps) {
  return (
    <Box borderRadius="lg" padding={4} boxShadow="md">
      <Heading textAlign="center" mb="1em">
        {title}
      </Heading>
      <Box mx="auto" minW="15rem" h="30rem" overflowY="auto" scrollbarWidth="thin">
        <Stack className="items-center" p={2}>
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
