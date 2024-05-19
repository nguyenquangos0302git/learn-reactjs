import React, { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./User";

export default function UserProfiles() {
  const { increaseAge } = useContext(UserContext);

  return (
    <div>
      <Profile />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
