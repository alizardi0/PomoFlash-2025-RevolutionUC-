import { Box, BoxProps, Editable, EditableRootProps } from "@chakra-ui/react";



interface MultipleChoiceInputProps extends BoxProps {
  editableProps?: EditableRootProps;
}


export function MultipleChoiceInput({ editableProps, ...props }: MultipleChoiceInputProps) {
  return (
    <Box {...props} rounded="md" padding="1rem" w="full">
      <Editable.Root maxLength={124} h="full" defaultValue="Click to edit" {...editableProps}>
        <Editable.Preview verticalAlign="middle" h="full" color="white" fontSize="14pt" background="transparent" minH="48px" alignItems="flex-start" width="full" />
        <Editable.Textarea h="full" color="white" fontSize="14pt" outlineColor="white" resize="none" />
      </Editable.Root>
    </Box>
  );
}
