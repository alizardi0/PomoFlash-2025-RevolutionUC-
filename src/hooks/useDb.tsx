/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  user: {
    userid: number;
    userfirst: string;
    userlogin: string;
    timeractive: any;
    timerstarttime: any;
    timerlength: any;
    currenttaskid: any;
  };
}

export interface Tasks {
  tasks: {
    taskid: number;
    userid: number;
    taskname: string;
    taskcompletion: boolean;
  }[];
}

export function useTasks(): { getTasks: (userId: string) => Promise<Tasks | string> } {
  const getTasks = async (userId: string) => {
    try {
      const response = await fetch("http://api.dylanvaneaton.com:59632/api/fetchtasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Pomoflash/1.0",
        },
        body: JSON.stringify({
          userid: userId,
        }),
      });

      if (!response.ok) {
        return `Error: ${response.status}`;
      }

      const result = await response.json();
      return result as Tasks;
    } catch {
      return "Error: unknown server error";
    }
  };
  return { getTasks };
};

export function useLogin(): { user: (userLogin: string) => Promise<User | string> } {
  const user = async (userLogin: string) => {
    try {
      const response = await fetch("http://api.dylanvaneaton.com:59632/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Pomoflash/1.0",
        },
        body: JSON.stringify({
          userlogin: userLogin,
        }),
      });

      if (!response.ok) {
        return `Error: ${response.status}`;
      }

      const result = await response.json();
      return result as User;
    } catch {
      return "Error: unknown server error";
    }
  };
  return { user };
};
