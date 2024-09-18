import {Todo} from "../Reducers/useTodoReducer.ts";
import TodoContext from "../TodoContext.ts";
import {useContext} from "react";

const TodoList = () => {
    const {todos} = useContext(TodoContext);
    return (
        <ul role="list" className="space-y-3">
            {
                todos.map((todo: Todo) => (
                    <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                    </li>))
            }
        </ul>
    );
};

export default TodoList;