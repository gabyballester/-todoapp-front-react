import { Fragment, useState } from "react";
import { updateTodoApi } from '../services/api.service';

export default function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);


  const updateDescription = async e => {
    e.preventDefault();
    try {
      await updateTodoApi(todo.todo_id, description);
      window.location = "/"
    } catch (err) {
      return err.message
    }
  };

  return (
    <Fragment>
      {/* Trigger the modal with a button */}
      <button type="button" className="btn btn-warning btn-lg"
        data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit</button>

      {/* Modal */}
      <div className="modal fade" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">

          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close"
                data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Save
              </button>
              <button type="button" className="btn btn-danger"
                data-dismiss="modal">
                Close
              </button>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}
