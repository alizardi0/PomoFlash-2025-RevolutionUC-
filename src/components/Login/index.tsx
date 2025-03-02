"use client";


import { Button, Input, Stack, Heading, Alert } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

import { Field } from "@/components/ui/field";
import { useLogin } from "@/hooks/useDb";



export interface LoginProps {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export function Login({ setLoggedIn }: LoginProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [userLogin, setUserLogin] = useState<string>("");
  const login = useLogin();

  return (
    <>
      {error && (
        <Alert.Root status="error">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Error</Alert.Title>
            <Alert.Description>
              User may not exist.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}
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
            <Input placeholder="Enter your username" value={userLogin} onChange={(e) => { setUserLogin(e.target.value); }} />
          </Field>
          <Button
            loading={loading}
            onClick={() => {
              if (userLogin.trim() === "") return;
              setLoading(true);
              login.user(userLogin).then((res) => {
                if (typeof window !== "undefined" && typeof res !== "string") {
                  sessionStorage.setItem("userid", res.user.userid.toString());
                  setLoggedIn(true);
                } else if (typeof res === "string") {
                  setError(res);
                }
              }).finally(() => {
                setLoading(false);
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
