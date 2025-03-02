"use client";


import { Button, Heading, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

import { Field } from "@/components/ui/field";



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
        <br></br>
        <Heading fontSize="8xl">00:00</Heading>
        <br></br>
        <br></br>
        <HStack gap="4" maxW="sm">
          <Button loading={loading} onClick={() => setLoading(true)}>Start</Button>
        </HStack>

      </div>
    </>
  );
}


