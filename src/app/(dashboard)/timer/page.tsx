"use client";

import { Button, HStack, Input, Icon } from "@chakra-ui/react";
import { HiCog } from "react-icons/hi";

import { PomoTimer } from "@/components/PomoTimer";
import { Field } from "@/components/ui/field";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";



export default function Timer() {
  <div
    className="mainDiv"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <PomoTimer />
    {/* {" "}
  {  PomoTimer } */}
    <HStack gap="4" maxW="sm">
      <Button>Start</Button>
      <PopoverRoot>
        <PopoverTrigger asChild>
          <Button size="sm" variant="outline">
            <Icon fontSize="2xl">
              <HiCog />
            </Icon>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <PopoverTitle fontWeight="medium">Timer Configurations</PopoverTitle>
            <HStack gap="4" maxW="sm">
              <Field label="Study Time" required>
                <Input placeholder="In Minutes..." />
              </Field>
              <Field label="Break Time" required>
                <Input placeholder="In Minutes..." />
              </Field>
              <Field label="Long Break Time" required>
                <Input placeholder="In Minutes..." />
              </Field>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </HStack>
  </div>;
}
