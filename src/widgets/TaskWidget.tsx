import { TaskList } from "@features/taskList";
import { filterOptions, initialTasks } from "@shared/constants";

export const TaskWidget = () => {
  return <TaskList initialTasks={initialTasks} filterOptions={filterOptions} />;
};
