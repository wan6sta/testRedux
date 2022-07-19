import {UsersActionsTypes} from "./users-actions";
import {UsersAction, UsersState} from "./users-models";

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionsTypes.ADD_USERS:
      return {
        ...state,
        users: [...action.payload]
      }

    default:
      return state
  }
}