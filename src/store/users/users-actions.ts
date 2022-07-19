import {addUsers, User, UsersAction} from "./users-models";
import {Dispatch} from "redux";

export enum UsersActionsTypes {
  ADD_USERS = 'users/add_users'
}

const addUsersAction = (users: User[]) => ({
  type: UsersActionsTypes.ADD_USERS,
  payload: users
})

export const setUsers = () => (dispatch: Dispatch<UsersAction>) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch(addUsersAction(users)))
    .catch(e => console.log(e))
}