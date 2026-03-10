export type Filter = "all" | "completed" | "incomplete";
export interface IOption {
  label: string;
  value: Filter;
}
export interface ITask {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}
