import { Fragment, useContext } from "react";
import { UserContext } from "./User";

export default function Profile() {
  const { firstName, age, address } = useContext(UserContext);
  return (
    <Fragment>
      <div>First Name: {firstName}</div>
      <div>Age: {age}</div>
      <div>Nation: {address.nation}</div>
      <div>City: {address.city}</div>
      <div>Street: {address.location.street}</div>
      <div>House: {address.location.house}</div>
    </Fragment>
  );
}
