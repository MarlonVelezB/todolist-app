import React, { useState, useCallback, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import { Task } from "../types/TaskItemType";
import NewTaskForm from "../components/NewTaskForm";
import { Collapse, message, Spin, Modal, Button } from "antd";
import {
  addTask,
  changeStateTask,
  fetchTasks,
  updateTask,
} from "../services/TaskService";

const MyDay: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskEdit, setTaskEdit] = useState<Task>();

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const tasks = await fetchTasks();
        setTasks(tasks);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Error fetching data:", error);
        showError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTaskCompletion = useCallback(
    async (id: number) => {
      try {
        // Encontrar la tarea en el estado actual
        const taskIndex = tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
          // Crear una copia del array de tareas
          const updatedTasks = [...tasks];
          // Invertir el estado de la tarea
          updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            state_completed: !updatedTasks[taskIndex].state_completed,
          };

          // Actualizar el estado local inmediatamente
          setTasks(updatedTasks);

          // Realizar la llamada a la API para actualizar en la base de datos
          await changeStateTask(id, updatedTasks[taskIndex].state_completed);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Error al cambiar el estado de la tarea:", error);
        showError(error.message);
        // Si hay un error, revertir el cambio en el estado local
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id
              ? { ...task, state_completed: !task.state_completed }
              : task
          )
        );
      }
      
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tasks]
  );

  const handleAddTask = useCallback(async (newTask: Task) => {
    try {
      await addTask(newTask);
      setTasks((prevTasks) => [...prevTasks, newTask]); // Actualiza el estado después de que se agrega la tarea.
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }, []);

  const handleEditTask = useCallback(async (newTask: Task) => {
    try {
      const res = await updateTask(newTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === res.id ? res : task))
      ); // Reemplaza la tarea que coincide con el id
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }, []);

  const handleError = useCallback((message: string) => {
    showError(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteTask = (id: number) => {
    console.log("DELETE TASK: ", id);
  };

  const handlEeditTask = (task: Task) => {
    setIsModalOpen(true);
    setTaskEdit(task);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Devuelvo mi funcion memorizada evitando rendes innecesarios y limintando el render para que solo cuando mi estado de tasks cambie
  const renderTasks = useCallback(
    (completed: boolean) => {
      const filteredTasks = tasks.filter(
        (task) => task.state_completed === completed
      );

      return (
        <div>
          {filteredTasks.length === 0 ? (
            <p>No hay más tareas pendientes</p>
          ) : (
            filteredTasks.map((task) => (
              <div key={task.id} className="mb-2">
                <TaskItem
                  task={task}
                  toggleTaskCompletion={toggleTaskCompletion}
                  onEditTask={handlEeditTask}
                  onDeleteTask={handleDeleteTask}
                />
              </div>
            ))
          )}
        </div>
      );
    },
    [tasks, toggleTaskCompletion]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: any["items"] = [
    {
      key: "1",
      label: "Tasks In Progress",
      children: renderTasks(false),
    },
    {
      key: "2",
      label: "Finished Tasks",
      children: renderTasks(true),
    },
  ];

  const showError = useCallback(
    (errorMessage: string) => {
      messageApi.open({
        type: "error",
        content: errorMessage,
      });
    },
    [messageApi]
  );

  return (
    <div className="p-5">
      {contextHolder}
      <div className="mb-5">
        <NewTaskForm submit={handleAddTask} error={handleError} />
      </div>
      <div>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Spin tip="Loading tasks" size="large">
              <span></span>
            </Spin>
          </div>
        )}
        <Collapse items={items} defaultActiveKey={["1"]} />
      </div>

      <Modal
        title="Edit Task"
        open={isModalOpen}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <NewTaskForm
          submit={handleEditTask}
          error={handleError}
          typeOperation="update"
          taskEdit={taskEdit}
        />
      </Modal>
    </div>
  );
};

export default MyDay;
