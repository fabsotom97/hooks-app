import type { Todo } from "../interfaces/todo";

interface TaskState {
    todos: Todo[],
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,
            }
        }
        case 'DELETE_TODO': {
            // i dont think applying a 'filter' is optimized.
            // what if it is a big array?
            // maybe remove by index...
            const filtered = state.todos.filter(todo => todo.id != action.payload);
            return {
                ...state,
                todos: filtered,
                length: state.todos.length - 1,
                completed: filtered.filter(todo => todo.completed).length,
                pending: filtered.filter(todo => !todo.completed).length,
            }
        }
        case 'TOGGLE_TODO': {
            // same concern as with 'filter',
            // here I iterate over the whole array
            // if it was big this may take a while.
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter(todo => !todo.completed).length,
            }
        }
        default:
            return state;
    }
}