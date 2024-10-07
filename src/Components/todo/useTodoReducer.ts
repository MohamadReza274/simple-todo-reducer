export interface Todo {
    id: number;
    title: string;
    description: string;
    isComplete?: boolean | false;
}

interface AddTodoAction {
    type: "ADD";
    todo: Todo;
}

interface RemoveTodoAction {
    type: "REMOVE";
    todoId: number;
}

interface UpdateTodoAction {
    type: "UPDATE";
    todoId:number;
    updatedTodo:Todo;
}

export type TodoAction = AddTodoAction | RemoveTodoAction | UpdateTodoAction;


const useTodoReducer = (todos: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "ADD":
            return [action.todo, ...todos];
        case "REMOVE":
            return todos.filter(todo => todo.id !== action.todoId);
            case "UPDATE": 
            return todos.map(todo => todo.id === action.todoId ? action.updatedTodo : todo)

        default:
            return todos;
    }
}

export default useTodoReducer;