"use client";
import { Box, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";



export function PomoTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);


  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && !isStopped) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isStopped]);

  const handleStartPause = () => {
    setIsRunning(prev => !prev);
    if (isStopped) setIsStopped(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsStopped(true);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setIsStopped(false);
  };

  return (
    <Box textAlign="center" margin="1.3rem">
      <Text fontSize="2xl" marginBottom="1rem">
        Time:
        {time}
        {" "}
        seconds
      </Text>
      <Button colorScheme="blue" onClick={handleStartPause}>
        {isRunning && !isStopped ? "Pause" : "Start"}
      </Button>
      <Button colorScheme="red" onClick={handleStop}>
        Stop
      </Button>
      <Button colorScheme="green" onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
}
