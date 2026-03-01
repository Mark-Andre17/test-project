import { useState } from "react";

import type { IUseTaskAction } from "@features/taskList/model";
import type { Filter, ITask } from "@shared/constants";

export const useTask = (initialTasks: ITask[]): IUseTaskAction => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = tasks.filter((task: ITask) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  // Удаление задачи по id
  const removeTask = (id: string) => {
    setTasks((prevTasks: ITask[]) =>
      prevTasks.filter((task: ITask) => task.id !== id),
    );
  };
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
    toggleTask,
  };
};
