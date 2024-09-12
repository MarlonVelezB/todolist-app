import React from "react";
import { TaskItemProps } from "../types/TaskItemType";
import ColorDot from "./ColorDot";
import { Button, Checkbox, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const TaskItem: React.FC<TaskItemProps> = ({ toggleTaskCompletion, task, onEditTask, onDeleteTask }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "normal":
        return "#4ddb48";
      case "important":
        return "#fbda07";
      case "critical":
        return "#e6470b";
      default:
        return "#d1d1d1";
    }
  };


  return (
    <div className="flex items-center justify-between p-3 border-b shadow-md bg-white rounded-lg">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <ColorDot color={getPriorityColor(task.priority)} />
          <Checkbox
            checked={task.state_completed}
            onChange={() => toggleTaskCompletion(task.id ? task.id : 0)}
          ></Checkbox>
        </div>
        <span
          className={task.state_completed ? "line-through text-gray-500" : ""}
        >
          {task.title}
        </span>
      </div>
      <div className="flex gap-3">
        <Button
          type="primary"
          shape="circle"
          onClick={() => onEditTask(task)}
          icon={<EditOutlined />}
        />
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => onDeleteTask(task.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="primary"
            danger
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </Popconfirm>
      </div>
    </div>
  );
};

export default TaskItem;
