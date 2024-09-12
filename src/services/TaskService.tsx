import axios from 'axios';
import { Task } from '../types/TaskItemType';

const TASKS_API_URL = 'http://localhost:3000/todos';

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(TASKS_API_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching tasks: ${error}`);
  }
};

export const addTask = async (task: Task): Promise<Task> => {
  try {
    const response = await axios.post(TASKS_API_URL, task);
    return response.data;
  } catch (error) {
    throw new Error(`Error adding task: ${error}`);
  }
};

//http://localhost:3000/todos/update/1
export const updateTask = async (task: Task): Promise<Task> => {
  try {
    const response = await axios.put(`${TASKS_API_URL}/update/${task.id}`, task);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating task: ${error}`);
  }
};

//http://localhost:3000/todos/change-state/1
export const changeStateTask = async (id: number, state: boolean): Promise<Task> => {
    try {
      const response = await axios.put(`${TASKS_API_URL}/change-state/${id}`, { stateComplete: state });
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(`Error al cambiar el estado de la tarea: ${error.message}`);
    }
};