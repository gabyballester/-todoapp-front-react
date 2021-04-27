import { useState } from "react";
import { saveTodoApi } from '../services/api.service';

const InputTodo = () => {
  const [description, setDescription] = useState("hello");

  const onSubmitForm = async e => {
    e.preventDefault();
    saveTodoApi(description)
  };

  return (
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input
        type="text"
        className="form-control"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="btn btn-success">Add</button>
    </form>
  )
}
export default InputTodo;
