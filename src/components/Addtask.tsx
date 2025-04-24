import React, { useState } from "react";
import TaskList from "./TaskList";
import { Todo } from "../models/types";

const AddTask: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
  };

  const deleteTask = (id: number) => {
    setTodos((prev) => prev.filter((val) => val.id !== id));
  };

  return (
    <>
      <form>
        <label>
          Enter new Task:
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="task_input"
          />
        </label>
        <button className="btn" onClick={addTodos}>
          Add task
        </button>
      </form>
      <TaskList todos={todos} deleteTask={deleteTask} />
    </>
  );
};

export default AddTask;
