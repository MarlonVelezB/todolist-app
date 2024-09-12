import React, { useEffect, useState } from "react";
import { Task } from "../types/TaskItemType";
import { Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
//import { addTask } from "../services/TaskService";
import SelectCustom from "./SelectCustom";
// const { Option } = Select;

export interface NewTaskFormProps {
  submit: (task: Task) => void;
  error: (errorMessage: string) => void;
  typeOperation?: string;
  taskEdit?: Task;
}

const options = [
  { value: "normal", label: "Normal", color: "#4ddb48" },
  { value: "important", label: "Important", color: "#fbda07" },
  { value: "critical", label: "Critical", color: "#e6470b" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewTaskForm: React.FC<NewTaskFormProps> = ({ submit, error, typeOperation, taskEdit }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("normal");

  useEffect(()=> {
    if(taskEdit){
      setTitle(taskEdit.title);
      setPriority(taskEdit.priority);
    }

  },[taskEdit])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      ...taskEdit,
      title,
      priority,
      state_completed: false,
      status_available: true
    };

    try {
      //const response = await addTask(newTask);
      submit(newTask);
      setTitle('');
      setPriority('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error fetching data:', error);
      error(error.message);
    }
  };

  const handleChange = (value: string) => {
    setPriority(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex flex-row gap-3 bg-white">
          <input
            className="w-full focus:outline-none border-none bg-white"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
             <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={handleSubmit}/>
        </div>
        <div className="mt-3">
          <Tooltip title="Priority">
            <SelectCustom handleChange={handleChange} options={options}/>
          </Tooltip>
        </div>
      </div>
    </form>
  );
};

export default NewTaskForm;
