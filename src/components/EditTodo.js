import { Fragment } from 'react';

export default function EditTodo() {
  return (
    <Fragment>
      {/* Trigger the modal with a button */}
      <button type="button" className="btn btn-warning btn-lg"
        data-toggle="modal" data-target="#myModal">
        Edit</button>

      {/* Modal */}
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">

          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close"
                data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
              <input type="text" className="form-control" />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-warning"
                data-dismiss="modal">
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
