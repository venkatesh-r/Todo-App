import React from "react";
import "./ListStyle.css";
import TaskEdit from "./TaskEdit";

interface Todos {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TaskList: React.FC<Todos> = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((val) => (
          <li className="list_style" key={val.id}>
            <TaskEdit todos={val} id={val.id} isCompleted={val.isCompleted} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
