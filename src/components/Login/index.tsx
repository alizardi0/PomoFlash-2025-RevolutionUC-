"use client";


import { Button, Input, Stack, Heading } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

import { Field } from "@/components/ui/field";
import { useLogin } from "@/hooks/useDb";



export interface LoginProps {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export function Login({ setLoggedIn }: LoginProps) {
  const [loading, setLoading] = useState(false);
  const login = useLogin();

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
          <Button
            loading={loading}
            onClick={() => {
              setLoading(true);
              login.user("psparks").then((res) => {
                if (typeof window !== "undefined" && typeof res !== "string") {
                  sessionStorage.setItem("userid", res.user.userid.toString());
                  setLoggedIn(true);
                }
              });
            }}
          >
            Login
          </Button>

        </Stack>
      </div>
    </>
  );
}
