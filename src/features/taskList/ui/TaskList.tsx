import { TaskCard } from "@entities/task";
import { useTask } from "@features/taskList/model";
import type { ITaskListProps } from "@features/taskList/ui";
import { type Filter } from "@shared/constants";
import { Button, Checkbox, FilterButtons, Flex } from "@shared/ui";

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
      <Flex className={styles.tasklist} direction="column">
        {tasks.length === 0
          ? "нет задач"
          : tasks.map((task) => (
              <Flex
                key={`${task.id}-${task.title}-${task.completed}`}
                align="center"
                gap={10}
                justify="space-between"
                className={styles.tasklist__card}
              >
                <TaskCard key={task.id} task={task} />
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
