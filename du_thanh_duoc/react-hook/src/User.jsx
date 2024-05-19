import React, { Fragment, useEffect, useState } from "react";

const intialAddress = (_) => {
  return {
    nation: "Viet Nam",
    city: "Da Nang",
    location: {
      street: "1 Do Xuan Hop",
      house: "Building",
    },
  };
};

const getAddress = (_) => {
  return new Promise((resolve) => {
    setTimeout((_) => {
      resolve({
        nation: "USD",
        city: "New York",
        location: {
          street: "1 XXX",
          house: "Department",
        },
      });
    }, 3000);
  });
};

export default function User() {
  const [firstName] = useState("Alex");
  const [age, setAge] = useState(24);
  // const [address, setAddress] = useState(intialAddress);
  const [address, setAddress] = useState((_) => {
    const init = intialAddress();
    return init;
  });
  const [, setForceRender] = useState(0);

  const increaseAge = (_) => {
    setAge((prevAge) => prevAge + 1);
  };

  const changeAddress = (_) => {
    setAddress((prev) => ({
      ...prev,
      city: "Vung Tau",
    }));
  };

  const changeLocation = (_) => {
    const newLocation = { ...address.location };
    newLocation.street = "2 Do Xuan Hop";
    setAddress((prev) => {
      return {
        ...prev,
        location: newLocation,
      };
    });
  };

  const reRender = (_) => {
    setForceRender((prev) => prev + 1);
  };

  useEffect((_) => {
    getAddress().then((res) => {
      setAddress((prev) => {
        const newAddress = { ...prev };
        newAddress.city = res.city;
        return {
          ...newAddress,
        };
      });
    });
  }, []);

  return (
    <Fragment>
      <div>First Name: {firstName}</div>
      <div>Age: {age}</div>
      <div>Nation: {address.nation}</div>
      <div>City: {address.city}</div>
      <div>Street: {address.location.street}</div>
      <div>House: {address.location.house}</div>
      <button onClick={reRender}>Rerender</button>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeAddress}>Change Address</button>
      <button onClick={changeLocation}>Change Location</button>
    </Fragment>
  );
}
