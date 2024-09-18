import {useContext} from "react";
import {TodoContextProvider} from "./TodoContext.tsx";


const useTodos = () => {
    return useContext(TodoContextProvider);
}

export default useTodos;