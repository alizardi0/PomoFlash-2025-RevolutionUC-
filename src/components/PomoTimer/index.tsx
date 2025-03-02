"use client";
import { Center, Box, Button, Text, Group } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { useTimer } from "@/hooks/useDb";



export function PomoTimer() {
  const FOCUS_DURATION = 25 * 60; // 25 minutes
  const BREAK_DURATION = 5 * 60; // 5 minutes

  const [time, setTime] = useState(FOCUS_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusSession, setIsFocusSession] = useState(false);
  const timer = useTimer();
  // const isTimer = timer.checkTimer(Number.parseInt(sessionStorage.getItem("userid") ?? ""))


  useEffect(() => {
    let interval: NodeJS.Timeout;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (timer.checkTimer(Number.parseInt(sessionStorage.getItem("userid") ?? "")));

    setIsRunning(true);
  };

  const handleReset = () => {
    setTime(isFocusSession ? FOCUS_DURATION : BREAK_DURATION);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds: number) => {
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
          <Group>
            <Button variant="surface" colorPalette="green" w="7rem" onClick={handleStart}>
              Start
            </Button>
            <Button variant="surface" colorPalette="red" w="7rem" onClick={handleReset}>
              Reset
            </Button>
          </Group>
        </Box>
      </Center>
    </>
  );
}
