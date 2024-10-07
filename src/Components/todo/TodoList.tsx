import { Todo } from "./useTodoReducer.ts";
import { useTodos } from "./index.ts";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const TodoList = () => {
  const { todos, dispatch } = useTodos();
  if (todos.length == 0) {
    return <p className="text-xl text-gray-400 pl-4">There is no todo.</p>;
  }
  return (
    <ul role="list" className="space-y-3">
      {todos.map((todo: Todo) => (
        <li className="flex items-center justify-between overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <button>
              <PencilSquareIcon className="w-4 h-4 text-blue-500" />
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE", todoId: todo.id })}
            >
              <TrashIcon className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
