"use client";
import { Center, Box, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";



export function PomoTimer() {
  const FOCUS_DURATION = 25 * 60; // 25 minutes
  const BREAK_DURATION = 5 * 60; // 5 minutes

  const [time, setTime] = useState(FOCUS_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusSession, setIsFocusSession] = useState(false);


  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval);
            setIsRunning(false);
            handleSessionSwitch();
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleSessionSwitch = () => {
    if (isFocusSession) {
      setTime(BREAK_DURATION);
    } else {
      setTime(FOCUS_DURATION);
    }
    setIsFocusSession(prev => !prev);
    setIsRunning(true); // Automatically start the next session
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setTime(isFocusSession ? FOCUS_DURATION : BREAK_DURATION);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Center my="auto" h="80vh">
        <Box textAlign="center" margin="1.3rem">
          <Text fontSize="6xl" marginBottom="1rem">
            {isFocusSession ? "Focus" : "Break"}
            {" "}
            Time:
            {formatTime(time)}
          </Text>
          <Button colorScheme="blue" w="7rem" onClick={handleStart}>
            Start
          </Button>
          <Button colorScheme="green" w="7rem" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Center>
    </>
  );
}
