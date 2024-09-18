import Navbar from "./Components/Navbar.tsx";
import {AddTodo, TodoContext, TodoList} from "./Components/todo";

function App() {
    return (
        <TodoContext>
            <Navbar/>
            <div className={"p-4"}>
                <AddTodo/>
                <TodoList/>
            </div>
        </TodoContext>
    )
}

export default App
