import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

function TaskList({ todo, filter }) {
  const high = [];
  const normal = [];
  const low = [];
  const done = [];

  todo.forEach((item) => {
    if (item.done === true) done.push(item);
    else if (item.priority === 'high') high.push(item);
    else if (item.priority === 'normal') normal.push(item);
    else if (item.priority === 'low') low.push(item);
  });

  const newItems = high.concat(normal, low, done);
  const list = newItems.filter((item) => (filter.search === ''
                            || item.title.toLowerCase()
                              .search(new RegExp(`^${filter.search.toLowerCase()}`, 'g')) !== -1))
    .filter((item, index, arr) => (filter.open === 'all'
                            || (filter.open === 'open' && arr[index].done === false)
                            || (filter.open === 'done' && arr[index].done === true)))
    .filter((item, index, arr) => (filter.priority === 'all'
                            || arr[index].priority === filter.priority));
  const newItem = list.map((item) => (
    <Task todo={item} key={item.id} />
  ));

  return (
    <div className="task-list row mt-5">
      {newItem}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.todo,
  filter: state.filter
});

export default connect(mapStateToProps)(TaskList);
