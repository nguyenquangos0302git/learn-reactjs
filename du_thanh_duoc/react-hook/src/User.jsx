import React, { Fragment, createContext, useEffect, useState } from "react";
import UserProfiles from "./UserProfiles";

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

export const UserContext = createContext({
  address: {
    nation: "Viet Nam",
    city: "Da Nang",
    location: {
      street: "1 Do Xuan Hop",
      house: "Building",
    },
  },
  age: 100,
  firstName: "Alex",
  increaseAge: () => {},
});

export default function User() {
  const [firstName] = useState("Alex");
  const [age, setAge] = useState(24);
  const [address, setAddress] = useState(intialAddress);
  // const [address, setAddress] = useState((_) => {
  //   const init = intialAddress();
  //   return init;
  // });
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
      <UserContext.Provider value={{ firstName, age, address, increaseAge }}>
        <UserProfiles />
      </UserContext.Provider>
      <button onClick={reRender}>Rerender</button>
      <button onClick={changeAddress}>Change Address</button>
      <button onClick={changeLocation}>Change Location</button>
    </Fragment>
  );
}
