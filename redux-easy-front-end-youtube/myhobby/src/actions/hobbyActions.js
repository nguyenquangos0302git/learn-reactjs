export const addHobby = (payload) => {
  return {
    type: "hooby/add",
    payload,
  };
};

export const setActiveHobby = (payload) => {
  return {
    type: "hooby/set_active",
    payload,
  };
};
