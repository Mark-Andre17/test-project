import { useMemo } from "react";

import { TaskCard, useGetTasksQuery } from "@entities/task";
import { type ITaskListProps, useTask } from "@features/taskList";
import type { Filter } from "@shared/constants";
import { Button, Checkbox, FilterButtons, Flex, Skeleton } from "@shared/ui";

import styles from "./TaskList.module.css";

export const TaskList: React.FC<ITaskListProps> = ({ filterOptions }) => {
  const { data: todos, isLoading, isError } = useGetTasksQuery();
  const tasksData = useMemo(() => todos ?? [], [todos]);
  const { tasks, filter, setFilter, removeTask, toggleTask } =
    useTask(tasksData);

  if (isError) return <h1 style={{ color: "red" }}>Error</h1>;
  if (isLoading) return <Skeleton count={30} />;

  return (
    <>
      <FilterButtons
        options={filterOptions}
        onClick={(value) => setFilter(value as Filter)}
        value={filter}
      />
      <Flex className={styles.tasklist} direction="column">
        {tasks.length === 0
          ? "нет задач"
          : tasks.map((task) => (
              <Flex
                key={task.id}
                align="center"
                gap={10}
                justify="space-between"
                className={styles.tasklist__card}
              >
                <TaskCard task={task} />
                <Flex gap={10}>
                  <Button
                    size="small"
                    variant="primary"
                    onClick={() => removeTask(task.id)}
                  >
                    удалить
                  </Button>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                </Flex>
              </Flex>
            ))}
      </Flex>
    </>
  );
};
