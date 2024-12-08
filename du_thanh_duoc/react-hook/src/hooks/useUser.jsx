import { useEffect, useState } from "react";
import getUser from "../api";

export default function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  return { user };
}
