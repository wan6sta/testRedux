import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from 'redux-thunk'
import {usersReducer} from "./users/users-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {todosReducer} from "./todos/todos-reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  todos: todosReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>