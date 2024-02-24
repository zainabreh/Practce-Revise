import React, { createContext, useState } from "react";

export const ContextAPI = createContext();

function TodoContext({ children }) {
  const [todo, setTodo] = useState([]);

  function updateToDo(text, date) {
    let newtodo = [...todo, { todoText: text, todoDate: date }];
    setTodo(newtodo);
  }

  function onDelete(eve) {
    let newtodo = todo.filter((e) => e.todoText !== eve);
    setTodo(newtodo);
  }

  return(
  <>
    <ContextAPI.Provider value={{ updateToDo, onDelete, todo }}>
      {children}
    </ContextAPI.Provider>
  </>
  )
}

export default TodoContext;
