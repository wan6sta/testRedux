import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {setUsers} from "./store/users/users-actions";
import {setTodos} from "./store/todos/todos-actions";

const App = () => {
  const dispatch = useDispatch()
  const {users} = useTypedSelector(state => state.users)
  const {todos} = useTypedSelector(state => state.todos)

  useEffect(() => {
    // @ts-ignore
    dispatch(setUsers())

    // @ts-ignore
    dispatch(setTodos())
  }, [])

  return (
    <div>
      users: {users.length}
      todos: {todos.length}
    </div>
  );
};

export default App;