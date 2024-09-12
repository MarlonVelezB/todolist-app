export interface TaskItemProps {
  task: Task
  toggleTaskCompletion: (id: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}

export interface Task {
  id?: number;
  title: string;
  state_completed: boolean;
  status_available: boolean;
  priority: string
}

export enum PriorityTask {
  Normal = 'normal',
  Important = 'important',
  Critical = 'critical'
}