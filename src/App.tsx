import Navbar from "./Components/Navbar.tsx";
import AddTodo from "./Components/AddTodo.tsx";
import TodoList from "./Components/TodoList.tsx";
import {useReducer} from "react";
import useTodoReducer from "./Reducers/useTodoReducer.ts";
import {todoList} from './data.json';
import TodoContext from "./TodoContext.ts";


function App() {


    const [todos, dispatch] = useReducer(useTodoReducer, todoList);

    console.log("Todos: ", todos)

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            <Navbar/>
            <div className={"p-4"}>
                <AddTodo/>
                <TodoList/>
            </div>
        </TodoContext.Provider>
    )
}

export default App
