import React, { useState } from "react";
import TaskList from "./taskList";

interface Todos {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const AddTask: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todos[]>([]);

  console.log(todo);
  const addTodos = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
  };
  console.log(todos);

  return (
    <>
      <form>
        <label>
          Enter new Task:
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <button onClick={addTodos}>Add task</button>
      </form>
      <TaskList todos={todos} />
    </>
  );
};

export default AddTask;
