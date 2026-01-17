import React from "react";

function Filters({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        Toutes
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        En cours
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Terminées
      </button>
    </div>
  );
}

export default Filters;

