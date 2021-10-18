const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "AddTask":
      return [...state, action.task];
    case "DeletTasks":
      return (state = []);

    default:
      return state;
  }
};
export default taskReducer;
