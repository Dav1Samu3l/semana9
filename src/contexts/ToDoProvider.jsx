import { createContext, useContext } from "react";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
    return(
        <ToDoContext.Provider value={undefined}>
            {children}
        </ToDoContext.Provider>
    )
}
export default ToDoProvider;