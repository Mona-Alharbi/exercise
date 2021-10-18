const LoggedIn = "LoggedIn";
const LoggedOut = "LoggedOut";
const TasksList = "TasksList";
const AddTask = "AddTask";
const DeletTasks = "DeletTasks";

export const loggedIn = (value) => ({
  type: LoggedIn,
  payload: value,
});

export const loggedOut = () => ({
  type: LoggedOut,
});

export const addtask = (value) => ({
  type: AddTask,
  task: value,
});
export const deletTasks = () => ({
  type: DeletTasks,
});
