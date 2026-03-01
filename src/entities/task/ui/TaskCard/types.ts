interface ITask {
  id: string;
  title: string;
  completed: boolean;
}
export interface ITaskCardProps {
  task: ITask;
}
