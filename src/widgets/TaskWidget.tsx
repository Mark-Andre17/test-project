import { TaskList } from "@features/taskList";
import { filterOptions } from "@shared/constants";

export const TaskWidget = () => {
  return <TaskList filterOptions={filterOptions} />;
};
