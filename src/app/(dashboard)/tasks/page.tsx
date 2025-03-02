"use client";

import { Button, Float, Group, HStack, Input, PopoverBody, Skeleton } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { TaskStack } from "@/components/TaskStack";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import { PopoverContent, PopoverRoot, PopoverTrigger, PopoverArrow } from "@/components/ui/popover";
import type { Tasks } from "@/hooks/useDb";
import { useTasks } from "@/hooks/useDb";



export default function Tasks() {
  const [loading, setLoading] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const tasks = useTasks();

  const [taskList, setTaskList] = useState<Tasks["tasks"]>();
  const [taskAddInput, setTaskAddInput] = useState("");

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
    <HStack mt="4em" w="fit" mx="auto" position="relative" gapX={4}>
      <Float placement="top-start" offset={3}>
        <PopoverRoot open={popoverOpen}>
          <PopoverTrigger onClick={() => setPopoverOpen(!popoverOpen)}>
            <Button size="xl" shadow="xl" rounded="2xl" colorPalette="black" fontWeight="extrabold" fontSize="12pt">+</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <PopoverArrow />
              <Group>
                <Input value={taskAddInput} onChange={(e) => { setTaskAddInput(e.target.value); }} />
                <Button
                  onClick={() => tasks.addTask({ taskname: taskAddInput, taskdescription: "", taskcompletion: false, userid: Number.parseInt(userId ?? "") }).then((res) => {
                    setPopoverOpen(false);
                    setTaskAddInput("");
                    return typeof res !== "string" && setTaskList(res.tasks);
                  })}
                >
                  Add Task
                </Button>
              </Group>
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>
      </Float>
      <TaskStack title="Tasks">
        {taskList?.filter(task => !task.taskcompletion).map(task => (
          <CheckboxCard w="full" onClick={() => tasks.modifyTask({ ...task, taskcompletion: true }).then(res => typeof res !== "string" && setTaskList(res.tasks))} key={task.taskid} variant="surface" colorPalette="green" label={task.taskname} />
        ))}
      </TaskStack>
      <TaskStack title="Completed">
        {taskList?.filter(task => task.taskcompletion).map(task => (
          <CheckboxCard w="full" onClick={() => tasks.modifyTask({ ...task, taskcompletion: false }).then(res => typeof res !== "string" && setTaskList(res.tasks))} key={task.taskid} variant="surface" colorPalette="green" label={task.taskname} checked />
        ))}
      </TaskStack>
    </HStack>
  );
}
