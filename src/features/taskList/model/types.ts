import type { Filter, ITask } from "@shared/constants";

export interface IUseTaskAction {
  tasks: ITask[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}
