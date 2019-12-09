/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { connect } from 'react-redux';

import {
  doneTodo, deleteTodo, edit, toggleOpen
} from '../../../actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // handleEdit = () => {
  //   const { editTodo, todo } = this.props;

  // }

  handleDone = () => {
    // eslint-disable-next-line no-shadow
    const { doneTodo, todo } = this.props;
    doneTodo(todo.id);
  }

  handleDelete = () => {
    // eslint-disable-next-line no-shadow
    const { deleteTodo, todo } = this.props;
    deleteTodo(todo.id);
  }

  handleEdit = () => {
    // eslint-disable-next-line no-shadow
    const { edit, todo, toggleOpen, } = this.props;
    edit(todo);
    toggleOpen(true);
  }

  render() {
    const { todo } = this.props;
    const colors = { low: 'bg-primary', normal: 'bg-warning', high: 'bg-danger' };
    let background = 'task col-sm-3 shadow rounded p-3 mr-3 mb-4 ';
    background += todo.done ? 'bg-success text-white task-done' : 'bg-white text-black ';
    return (
      <div className={background} style={{ height: '250px' }}>
        <h3 className="title">{todo.title}</h3>
        <p className="text mb-6 text-break">{todo.description}</p>
        <div className="settings">
          <div className="d-flex justify-content-between mb-1">
            <button
              type="button"
              className={`btn status-priority text-white ${colors[todo.priority]}`}
            >
              {todo.priority}
            </button>
            <button type="button" className="btn btn-warning dropdown-toggle text-white" data-toggle="dropdown">
              ...
            </button>
            <div className="dropdown-menu options-list">
              <div className="dropdown-item done" onClick={this.handleDone}>done</div>
              <div
                className="dropdown-item edit"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={this.handleEdit}
              >
edit
              </div>
              <div className="dropdown-item delete" onClick={this.handleDelete}>delete</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  doneTodo, deleteTodo, edit, toggleOpen
})(Task);
