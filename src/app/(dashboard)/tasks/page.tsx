import { HStack } from "@chakra-ui/react";

import { TaskStack } from "@/components/TaskStack";
import { CheckboxCard } from "@/components/ui/checkbox-card";



export default function Tasks() {
  return (
    <HStack mt="4em" w="fit" mx="auto" gapX={10}>
      <TaskStack title="Tasks">
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" />
      </TaskStack>
      <TaskStack title="Completed">
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" checked />
        <CheckboxCard variant="surface" colorPalette="green" label="Do the dishes" checked />
      </TaskStack>
    </HStack>
  );
}
