import { useContext } from "react";
import { todoContext } from "../Contexts/ToDoContext";
import ToDoProvider from "./ToDoProvider";



export const useToDos = () => {
    const context = useContext(ToDoProvider);
  
    if (context) {
      return context;
    } else {
      throw new Error("useTodos não está dentro do ToDoProvider");
    }
  };
