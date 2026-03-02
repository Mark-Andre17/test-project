import React from "react";

import type { ITaskCardProps } from "@entities/task";

import styles from "./TaskCard.module.css";

export const TaskCard: React.FC<ITaskCardProps> = React.memo(({ task }) => {
  return (
    <div className={styles.taskcard}>
      <p>{task.id}</p>
      <p className={styles.taskcard_text}>{task.title}</p>
    </div>
  );
});
