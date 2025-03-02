"use client";
import { Tabs } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { BsCardText } from "react-icons/bs";
import { LuClock4, LuNotebookPen } from "react-icons/lu";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <>
      <Tabs.Root fitted defaultValue={currentPath} variant="outline" onValueChange={(e) => { router.push(e.value); }}>
        <Tabs.List>
          <Tabs.Trigger value="/">
            <LuClock4 />
            Timer
          </Tabs.Trigger>
          <Tabs.Trigger value="/tasks">
            <LuNotebookPen />
            Tasks
          </Tabs.Trigger>
          <Tabs.Trigger value="/flashcards">
            <BsCardText />
            Flashcards
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      {children}
    </>
  );
}
