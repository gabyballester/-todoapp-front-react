import { Fragment, useEffect, useState } from 'react';
import { getTodosApi } from '../services/api.service';

export default function ListTodos() {
  const [todos, setTodos] = useState([])

  const getTodos = async e => {
    try {
      const {data} = await getTodosApi();
      setTodos(data);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    getTodos()
  },[])

console.log(todos);
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
          {/* Example
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
          */}
        </tbody>
      </table>
    </Fragment>
  )
}
