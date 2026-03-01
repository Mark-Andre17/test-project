import type { IOption, ITask } from "@shared/constants/types";

export const initialTasks: ITask[] = [
  { id: "1", title: "Купить молоко", completed: false },
  { id: "2", title: "Сделать зарядку", completed: true },
];

export const filterOptions: IOption[] = [
  { label: "Все", value: "all" },
  { label: "Выполненные", value: "completed" },
  { label: "Невыполненные", value: "incomplete" },
];
