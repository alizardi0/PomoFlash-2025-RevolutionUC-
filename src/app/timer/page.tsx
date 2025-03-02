"use client";


import { Button, Heading } from "@chakra-ui/react";
import { useState } from "react";



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
        <Heading fontSize="4xl">00:00</Heading>
        <br></br>

        <Button loading={loading} onClick={() => setLoading(true)}>Start</Button>

      </div>
    </>
  );
}
