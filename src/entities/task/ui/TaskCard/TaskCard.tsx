import type { ITaskCardProps } from "@entities/task";
import { Button } from "@shared/ui";

import styles from "./TaskCard.module.css";

export const TaskCard: React.FC<ITaskCardProps> = ({
  task,
  removeTask,
  toggleTask,
}) => {
  return (
    <div className={styles.taskcard}>
      <p>{task.id}</p>
      <p className={styles.taskcard_text}>{task.title}</p>
      <Button
        size="small"
        variant="primary"
        onClick={() => removeTask(task.id)}
      >
        удалить
      </Button>
      <input
        type="checkbox"
        checked={task.completed}
        className={styles.taskcard_checkbox}
        onChange={() => toggleTask?.(task.id)}
      />
    </div>
  );
};
