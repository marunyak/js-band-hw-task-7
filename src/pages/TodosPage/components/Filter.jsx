import React from 'react';
import { connect } from 'react-redux';
import { changeSearch, changeStatus, changePriority } from '../../../actions';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      search: '',
      done: '',
      priority: ''
    };
  }

  handleSearch = () => {
    // eslint-disable-next-line no-shadow
    const { changeSearch } = this.props;

    this.setState({ search: this.inputSearch.value });
    changeSearch(this.inputSearch.value);
  }

  handleStatus = () => {
    // eslint-disable-next-line no-shadow
    const { changeStatus } = this.props;

    this.setState({ done: this.selectDone.value });
    changeStatus(this.selectDone.value);
  }

  handlePriority = () => {
    // eslint-disable-next-line no-shadow
    const { changePriority } = this.props;

    this.setState({ priority: this.selectPriority.value });
    changePriority(this.selectPriority.value);
  }

  render() {
    const { search, done, priority } = this.state;
    return (
      <nav className="filter row mt-4">
        <div className="col">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search by title"
            // eslint-disable-next-line no-return-assign
            ref={node => (this.inputSearch = node)}
            onChange={this.handleSearch}
            value={search}
          />
        </div>
        <div className="col">
          <select
            name="open"
            className="form-control"
          // eslint-disable-next-line no-return-assign
            ref={node => (this.selectDone = node)}
            onChange={this.handleStatus}
            value={done}
          >
            <option value="all">all</option>
            <option value="open">open</option>
            <option value="done">done</option>
          </select>
        </div>
        <div className="col">
          <select
            name="priority"
            className="form-control"
          // eslint-disable-next-line no-return-assign
            ref={node => (this.selectPriority = node)}
            onChange={this.handlePriority}
            value={priority}
          >
            <option value="all">all</option>
            <option value="high">high</option>
            <option value="normal">normal</option>
            <option value="low">low</option>
          </select>
        </div>
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
    Create
        </button>
      </nav>
    );
  }
}

export default connect(null, { changeSearch, changeStatus, changePriority })(Filter);
