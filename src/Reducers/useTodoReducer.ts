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

export type TodoAction = AddTodoAction | RemoveTodoAction;


const useTodoReducer = (todos: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "ADD":
            return [action.todo, ...todos];
        case "REMOVE":
            return todos.filter(todo => todo.id !== action.todoId);
        default:
            return todos;
    }
}

export default useTodoReducer;