"use client";


import { Button, Input, Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";

import { Field } from "@/components/ui/field";



export default function Login() {
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
        <Heading fontSize="4xl">Welcome to PomoFlash</Heading>
        <br></br>
        <Stack gap="4" maxW="sm">
          <Field label="Username" required>
            <Input placeholder="Enter your username" />
          </Field>
          <Button loading={loading} onClick={() => setLoading(true)}>Login</Button>

        </Stack>
      </div>
    </>
  );
}
