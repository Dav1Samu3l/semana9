import { useContext } from "react";
import { TodoList } from "../components/TodoList";
import { Formulario } from "../components/Formulario";
import ToDoProvider, { ToDoContext } from "../Contexts/ToDoProvider";

export const Home = () => {
  const { addToDo, pendingToDos, markTodo, completedToDos } = useContext(ToDoContext);
 
  return (
    <ToDoProvider>
      <div className="row">
        <Formulario />
      </div>
      <div className="row">
        
        <TodoList name= "addToDo" onClick={addToDo} />
        <TodoList name="A fazer" list={pendingToDos} />
        <TodoList name="Finalizados" list={completedToDos} />
      </div>
    </ToDoProvider>
  );
};
