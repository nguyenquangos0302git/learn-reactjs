const initialState = {
  hobbiesList: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "hooby/add": {
      const newHobby = [...state.hobbiesList];
      newHobby.push(action.payload);
      return {
        ...state,
        hobbiesList: newHobby,
      };
    }
    case "hooby/set_active": {
      const newActiveId = action.payload;
      return {
        ...state,
        activeId: newActiveId,
      };
    }
    default:
      return state;
  }
  return state;
};

export default hobbyReducer;
