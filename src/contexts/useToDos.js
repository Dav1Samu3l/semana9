import { useContext } from "react";
import ToDoContext from "./ToDoProvider";

export const useToDos = () => {
  const context = useContext(ToDoContext);

  return context;
};
