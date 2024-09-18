import {createContext, Dispatch} from "react";
import {Todo, TodoAction} from "./Reducers/useTodoReducer.ts";


interface ContextType {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>;
}

const todoContext = createContext<ContextType>({} as ContextType);

export default todoContext;