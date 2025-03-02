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

export function useLogin(): { user: (userLogin: string) => Promise<User | string> } {
  const user = async (userLogin: string) => {
    console.log("logging in with user", userLogin);
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
      console.log(result);
      return result as User;
    } catch {
      return "Error: unknown server error";
    }
  };
  return { user };
};

// export interface UseDb {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   data: any;
//   loading: boolean;
//   error: string;
// }

// export function useLogin(userlogin: string): UseDb {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const login = async () => {
//       try {
//         const response = await fetch("http://api.dylanvaneaton.com:59632/api/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             "User-Agent": "Pomoflash/1.0",
//           },
//           body: JSON.stringify({
//             userlogin: userlogin,
//           }),
//         });

//         if (!response.ok) {
//           setError(`Error: ${response.status}`);
//         }

//         const result = await response.json();
//         setData(result);
//       } catch {
//         setError("Error: unknown server error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     login();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return { data, loading, error };
// };
