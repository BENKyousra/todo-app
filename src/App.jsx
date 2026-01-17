import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all, active, completed

  // Charger les tâches depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Sauvegarder les tâches dans localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Ajouter une tâche
  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Supprime toutes les tâches
  const deleteAllTasks = () => {
    setTasks([]); // vide la liste
    localStorage.removeItem("tasks"); // vide aussi le localStorage
  };

  // Basculer l'état terminé
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filtrer les tâches
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <TaskForm addTask={addTask} />
      <Filters filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
      <p>{tasks.filter((t) => !t.completed).length} tâche(s) restante(s)</p>
      <div className="delete-all-container">
        <button className="delete-all-btn" onClick={deleteAllTasks}>
          Supprimer tout
        </button>
      </div>
    </div>
  );
}

export default App;
