const userReduser = (state = "", action) => {
  switch (action.type) {
    case "LoggedIn":
      return action.payload;
    case "LoggedOut":
      return (state = "");
    case "start":
      return action.payload;
    default:
      return state;
  }
};
export default userReduser;
