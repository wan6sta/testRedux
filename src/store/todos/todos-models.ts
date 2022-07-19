import {TodosActionsTypes} from "./todos-actions";

export interface todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodosState {
  todos: todo[]
  loading: boolean
  error: null | string
}

export interface addTodos {
  type: TodosActionsTypes.ADD_TODOS,
  payload: todo[]
}

export type TodosAction = addTodos