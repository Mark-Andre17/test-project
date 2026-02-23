import type { ITask } from "@shared/constants";

export interface ITaskCardProps {
  task: ITask;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}
