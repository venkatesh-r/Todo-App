import React from "react";

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
          <li key={val.id}>{val.todo}</li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
