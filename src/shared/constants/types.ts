export type Filter = "all" | "completed" | "incomplete";
export interface IOption {
  label: string;
  value: Filter;
}
export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}
