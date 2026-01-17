import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
}

export default TaskItem;
