import Navbar from "./Components/Navbar.tsx";
import AddTodo from "./Components/AddTodo.tsx";
import TodoList from "./Components/TodoList.tsx";
import {useReducer} from "react";
import useTodoReducer, {Todo} from "./Reducers/useTodoReducer.ts";
import {todoList} from './data.json';


function App() {


    const [todos, dispatch] = useReducer(useTodoReducer, todoList);

    console.log("Todos: ", todos)

    return (
        <>
            <Navbar/>
            <div className={"p-4"}>
                <AddTodo onTodoAdd={(todo: Todo) => {
                    console.log(todo);
                    dispatch({type: 'ADD', todo})
                }}/>

                <TodoList todos={todos}/>
            </div>
        </>
    )
}

export default App
