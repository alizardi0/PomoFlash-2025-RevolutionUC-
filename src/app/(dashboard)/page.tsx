"use client";
import { Alert, Spinner } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { PomoTimer } from "@/components/PomoTimer";
import { useTimer } from "@/hooks/useDb";



export interface TimerData {
  userid: number;
  timeractive: boolean;
  timerstarttime: Date;
  timerlength: string;
}

export default function Timer() {
  const timer = useTimer();
  const [error, setError] = useState<string>("");
  const [timerData, setTimerData] = useState<TimerData | undefined>();

  const userId = useMemo(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("userid");
    }
  }, []);

  useMemo(() => {
    timer.checkTimer(4).then(res => console.log(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {typeof userId === "string"
        ? (
          <PomoTimer
            onStartButton={() => timer.newTimer(Number.parseInt(userId), "40 minutes").then((res) => {
              if (typeof res !== "string") {
                setTimerData(res);
              } else {
                setError(res);
              }
            })}
            timerData={timerData}
          />
        )

        : <Spinner />}
    </>

  );
}
