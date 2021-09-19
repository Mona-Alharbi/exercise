const userReduser = (state = "", action) => {
  switch (action.type) {
    case "LoggedIn":
      return action.payload;
    case "LoggedOut":
      return state ="";
    default:
      return state;
  }
};
export default userReduser;
