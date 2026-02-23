import { TaskCard } from "@entities/task";
import { useTask } from "@features/taskList/model";
import type { ITaskListProps } from "@features/taskList/ui";
import { type Filter } from "@shared/constants";
import { FilterButtons } from "@shared/ui";

import styles from "./TaskList.module.css";

export const TaskList: React.FC<ITaskListProps> = ({
  initialTasks,
  filterOptions,
}) => {
  const { tasks, filter, setFilter, removeTask, toggleTask } =
    useTask(initialTasks);
  return (
    <>
      <FilterButtons
        options={filterOptions}
        onClick={(e) => setFilter(e as Filter)}
        value={filter}
      />
      <div className={styles.tasklist}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            removeTask={() => removeTask(task.id)}
            toggleTask={() => toggleTask(task.id)}
          />
        ))}
      </div>
    </>
  );
};
