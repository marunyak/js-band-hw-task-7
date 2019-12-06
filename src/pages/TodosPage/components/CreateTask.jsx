import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../actions';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    // eslint-disable-next-line no-shadow
    const { addTodo } = this.props;
    e.preventDefault();
    if (!this.textarea.value || !this.input.value) return;
    addTodo({
      id: Date.now().toString(),
      title: this.input.value,
      description: this.textarea.value,
      priority: this.select.value,
      done: false
    });
    this.input.value = null;
    this.textarea.value = null;
  }

  render() {
    return (
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Create/Edit</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="create-task-form">
                <div className="form-group">
                  <label htmlFor="title" style={{ display: 'block' }}>
Title:
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      // eslint-disable-next-line no-return-assign
                      ref={node => (this.input = node)}
                      required
                    />
                  </label>
                  <div className="invalid-feedback">
        Please enter title!
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description" style={{ display: 'block' }}>
Description:
                    <textarea
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Description"
                      // eslint-disable-next-line no-return-assign
                      ref={node => (this.textarea = node)}
                      required
                    />
                    <div className="invalid-feedback">
        Please enter description!
                    </div>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="priority" style={{ display: 'block' }}>
Priority:
                    <select
                      name="priority"
                      className="form-control"
                      // eslint-disable-next-line no-return-assign
                      ref={node => (this.select = node)}
                    >
                      <option value="high">High</option>
                      <option value="normal">Normal</option>
                      <option value="low">Low</option>
                    </select>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning text-white" data-dismiss="modal">Close</button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={(e) => this.handleClick(e)}
                data-dismiss="modal"
              >
Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { addTodo })(CreateTask);
