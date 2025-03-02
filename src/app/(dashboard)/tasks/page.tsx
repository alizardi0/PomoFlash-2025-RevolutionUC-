"use client";

import { HStack, Skeleton } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { TaskStack } from "@/components/TaskStack";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import type { Tasks } from "@/hooks/useDb";
import { useTasks } from "@/hooks/useDb";



export default function Tasks() {
  const [loading, setLoading] = useState(true);
  const tasks = useTasks();

  const [taskList, setTaskList] = useState<Tasks["tasks"]>();

  const userId = useMemo(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("userid");
    }
  }, []);

  useMemo(() => {
    setLoading(true);
    tasks.getTasks(userId ?? "").then((res) => {
      if (typeof res !== "string") {
        setTaskList(res.tasks);
        console.log(res);
      }
    }).finally(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (loading) return (
    <HStack mt="4em" w="fit" mx="auto" gapX={10}>
      <Skeleton />
    </HStack>
  );

  return (
    <HStack mt="4em" w="fit" mx="auto" gapX={10}>
      <TaskStack title="Tasks">
        {taskList?.filter(task => !task.taskcompletion).map((task, i) => (
          <CheckboxCard key={i} variant="surface" colorPalette="green" label={task.taskname} />
        ))}
      </TaskStack>
      <TaskStack title="Completed">
        {taskList?.filter(task => task.taskcompletion).map((task, i) => (
          <CheckboxCard key={i} variant="surface" colorPalette="green" label={task.taskname} checked />
        ))}
      </TaskStack>
    </HStack>
  );
}
