import React, {createContext, Dispatch, useReducer} from "react";
import useTodoReducer, {Todo, TodoAction} from "./useTodoReducer.ts";
import {todoList} from './data.json'


interface ContextType {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>;
}

interface Props {
    children: React.ReactNode;
}

export const TodoContextProvider = createContext<ContextType>({} as ContextType);

const TodoContext = ({children}: Props) => {
    const [todos, dispatch] = useReducer(useTodoReducer, todoList);


    return (
        <TodoContextProvider.Provider value={{todos, dispatch}}>
            {children}
        </TodoContextProvider.Provider>
    )
}

export default TodoContext;