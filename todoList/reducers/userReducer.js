const initialState = {
  name: "",
  password: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LoggedIn":
      return action.payload;
    case "LoggedOut":
      return (state = initialState);
    default:
      return state;
  }
};
export default userReducer;
