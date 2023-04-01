import { createContext, useContext } from "react";


export const ToDoContext = createContext();

export const useToDos = () => {
    const context = useContext(ToDoContext);
    if(context){
        return context;
    }else{
        alert("useTodos nao esta funcionando")

    }
};
