import {Todo} from "./useTodoReducer.ts";
import {useTodos} from "./index.ts";

const TodoList = () => {
    const {todos} = useTodos();
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