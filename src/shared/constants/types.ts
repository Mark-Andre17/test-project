export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}
export type Filter = "all" | "completed" | "incomplete";
export interface IOption {
  label: string;
  value: Filter;
}
