"use client";


import { Button, Heading, HStack, Input, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { HiCog } from "react-icons/hi";

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
  const [loading, setLoading] = useState(false);

  return (
    <>
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

        <br></br>
        <Heading fontSize="8xl">00:00</Heading>
        <br></br>
        <br></br>
        <HStack gap="4" maxW="sm">
          <Button loading={loading} onClick={() => setLoading(true)}>Start</Button>
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

      </div>
    </>
  );
}


