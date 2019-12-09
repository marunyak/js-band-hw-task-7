import React from 'react';
import { connect } from 'react-redux';
import {
  addTodo, updateTodo, deletee, toggleOpen
} from '../../../actions';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      id: '',
      title: '',
      description: '',
      priority: '' || 'high'
    };
  }

  componentDidMount() {
    const {
      id, title, description, priority
    } = this.props;
    this.setState({
      id,
      title,
      description,
      priority
    });
  }

  handleClickSave = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-shadow
    const { addTodo, toggleOpen, updateTodo } = this.props;
    const {
      id, title, description, priority
    } = this.state;
    if (!this.textarea.value || !this.input.value) return;
    if (title && description && priority) {
      updateTodo({
        id, title: this.input.value, description: this.textarea.value, priority: this.select.value
      });
    } else {
      addTodo({
        id: Date.now().toString(),
        title: this.input.value,
        description: this.textarea.value,
        priority: this.select.value,
        done: false
      });
    }
    deletee();
    this.input.value = null;
    this.textarea.value = null;
    toggleOpen(false);
  }

  handleClickCancel = () => {
    // eslint-disable-next-line no-shadow
    const { toggleOpen } = this.props;
    toggleOpen(false);
  }

  render() {
    const { title, description, priority } = this.state;
    return (
      <div className="modal fade show" style={{ display: 'block', opacity: '.15s' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Create/Edit</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => this.handleClickCancel()}
              >
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
                      defaultValue={title}
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
                      defaultValue={description}
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
                      defaultValue={priority}
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
              <button
                type="button"
                className="btn btn-warning text-white"
                data-dismiss="modal"
                onClick={() => this.handleClickCancel()}
              >
Close

              </button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={(e) => this.handleClickSave(e)}
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

const mapStateToProps = (state) => ({
  id: state.edit.editId,
  title: state.edit.editTitle,
  description: state.edit.editDescription,
  priority: state.edit.editPriority
});

export default connect(mapStateToProps, { addTodo, updateTodo, toggleOpen })(CreateTask);
