import React from "react";
import "./ListStyle.css";
import TaskEdit from "./TaskEdit";
import { Todo } from "../models/types";

interface Todos {
  todos: Todo[];
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<Todos> = ({ todos, deleteTask }) => {
  return (
    <>
      <ul>
        {todos.map((val) => (
          <li className="list_style" key={val.id}>
            <TaskEdit todos={val} deleteTask={deleteTask} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
