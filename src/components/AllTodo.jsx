import React, { useContext } from "react";
import { TodoContext } from "../context";
import Next7days from "./Next7days";
import Todo from "./Todo";

function AllTodo() {
  const { todos, selectedProject } = useContext(TodoContext);

  return (
    <div className="Todos">
      <div className="selected-project">{selectedProject}</div>
      <div className="todos">
        {selectedProject === "Next 7 days" ? (
          <Next7days todos={todos} />
        ) : (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
}

export default AllTodo;
