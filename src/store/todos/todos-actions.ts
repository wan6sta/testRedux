import {todo} from "./todos-models";
import {Dispatch} from "redux";



export enum TodosActionsTypes {
  ADD_TODOS = 'todos/add_todos'
}

const addTodosAction = (todos: todo[]) => ({
  type: TodosActionsTypes.ADD_TODOS,
  payload: todos
})

export const setTodos = () => (dispatch: Dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => dispatch(addTodosAction(todos)))
    .catch(e => console.log(e))
}