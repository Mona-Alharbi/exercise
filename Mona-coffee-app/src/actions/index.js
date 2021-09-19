export const loggedIn = (name) => {
  return {
      type: "LoggedIn",
      payload:name
  };
};
export const loggedOut = () => {
  return {
    type: "LoggedOut",

  };
};