import { useState } from "react";
import { saveTodoApi } from '../services/api.service';

export default function InputTodo () {
  const [description, setDescription] = useState("");

  let disabled = true;
  if(description.trim().length>0){
    disabled = false
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    saveTodoApi(description)
    window.location = "/"
  };

  return (
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input
        type="text"
        className="form-control"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button disabled={disabled} className="btn btn-success">Add</button>
    </form>
  )
}