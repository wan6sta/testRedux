import {TodosActionsTypes} from "./todos-actions";
import {TodosAction, TodosState} from "./todos-models";

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null
}

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
  switch (action.type) {
    case TodosActionsTypes.ADD_TODOS:
      return {
        ...state,
        todos: [...action.payload]
      }

    default:
      return state
  }
}