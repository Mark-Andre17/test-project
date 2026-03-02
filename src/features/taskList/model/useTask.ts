import { useCallback, useMemo, useState } from "react";

import type { IUseTaskAction } from "@features/taskList/model";
import type { Filter, ITask } from "@shared/constants";

export const useTask = (initialTasks: ITask[]): IUseTaskAction => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: ITask) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  const removeTask = useCallback(
    (id: string) => {
      setTasks((prevTasks: ITask[]) =>
        prevTasks.filter((task: ITask) => task.id !== id),
      );
    },
    [setTasks],
  );
  const toggleTask = useCallback(
    (id: string) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task,
        ),
      );
    },
    [setTasks],
  );
  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
    toggleTask,
  };
};
