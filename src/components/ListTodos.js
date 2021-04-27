import { Fragment, useEffect, useState } from 'react';
import { getTodosApi } from '../services/api.service';

export default function ListTodos() {
  const [todos, setTodos] = useState([])

  const getTodos = async e => {
    try {
      const { data } = await getTodosApi();
      setTodos(data);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
