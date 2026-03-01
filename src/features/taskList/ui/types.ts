import type { IOption, ITask } from "@shared/constants";

export interface ITaskListProps {
  initialTasks: ITask[];
  filterOptions: IOption[];
}
