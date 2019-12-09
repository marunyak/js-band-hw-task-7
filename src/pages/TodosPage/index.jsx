import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function TodosPage({ isOpen }) {
  return (
    <div>
      <Header />
      <Main>
        <Filter />
        <TaskList />
      </Main>
      <Footer />
      {isOpen ? <CreateTask /> : ''}
      {/* <CreateTask /> */}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isOpen: state.popup.isOpen,
});
export default connect(mapStateToProps)(TodosPage);
