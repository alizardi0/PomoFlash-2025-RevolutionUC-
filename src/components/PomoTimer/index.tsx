"use client";
import { Center, Box, Button, Text, Group } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";

import { TimerData } from "@/app/(dashboard)/page";



export interface PomoTimerProps {
  onStartButton?: () => void;
  onResetButton?: () => void;
  timerData?: TimerData;
}

export function PomoTimer({ onStartButton, onResetButton, timerData }: PomoTimerProps) {
  const FOCUS_DURATION = 25 * 60; // 25 minutes
  const BREAK_DURATION = 5 * 60; // 5 minutes

  const [time, setTime] = useState(FOCUS_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusSession, setIsFocusSession] = useState(false);

  const timeLeft = useMemo(() => {
    function getTimeDifference(startTimeUtc: string): string {
      const startDate = new Date(startTimeUtc);

      const currentDate = new Date();

      const diffInMillis = currentDate.getTime() - startDate.getTime();

      const hours = Math.floor(diffInMillis / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMillis % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMillis % (1000 * 60)) / 1000);

      return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
    if (!timerData) return null;
    return getTimeDifference(timerData.timerstarttime.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerData?.timerstarttime]);

  console.log(timeLeft);

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

  const startTimer = () => {
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
          <Text fontSize="9xl" marginBottom="1rem">
            {formatTime(time)}
          </Text>
          <Group gap={6}>
            <Button variant="surface" colorPalette="green" w="7rem" onClick={onStartButton}>
              Start
            </Button>
            <Button variant="surface" colorPalette="red" w="7rem" onClick={onResetButton}>
              Reset
            </Button>
          </Group>
        </Box>
      </Center>
    </>
  );
}
