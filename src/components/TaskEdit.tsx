import React from "react";
import { Todo } from "../models/types";

interface Todos {
  todos: Todo;
  deleteTask: (id: number) => void;
}

const TaskEdit: React.FC<Todos> = ({ todos, deleteTask }) => {
  console.log(todos);
  return (
    <>
      <div>{todos.todo}</div>
      <div>
        {/*  <span onClick={}>completed</span> */}
        <button onClick={() => deleteTask(todos.id)}>delete</button>
      </div>
    </>
  );
};

export default TaskEdit;
