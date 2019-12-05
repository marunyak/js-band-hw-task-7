/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

function Task() {
  // const colors = { low: 'bg-primary', normal: 'bg-warning', high: 'bg-danger' };
  const background = 'task col-sm-3 shadow rounded p-3 mr-3 mb-4 ';
  // background += item.done ? 'bg-success text-white task-done' : 'bg-white text-black ';

  return (
    <div className={background} style={{ height: '250px' }}>
      <h3 className="title">Title</h3>
      <p className="text mb-6 text-break">bababababbabbababbab</p>
      <div className="settings">
        <div className="d-flex justify-content-between mb-1">
          <button
            type="button"
            className="btn status-priority text-white bg-primary"
          >
Low
          </button>
          <button type="button" className="btn btn-warning dropdown-toggle text-white" data-toggle="dropdown">
              ...
          </button>
          <div className="dropdown-menu options-list">
            <div className="dropdown-item done">done</div>
            <div
              className="dropdown-item edit"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
edit
            </div>
            <div className="dropdown-item delete">delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;
