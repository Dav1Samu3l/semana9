import { useContext } from "react";



export const useToDos = () => {
    const context = useContext(todoContext);
  
    if (context) {
      return context;
    } else {
      throw new Error("useTodos não está dentro do ToDoProvider");
    }
  };