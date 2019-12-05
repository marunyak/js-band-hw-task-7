import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function TodosPage() {
  return (
    <div>
      <Header />
      <Main>
        <Filter />
        <TaskList />
      </Main>
      <Footer />
      <CreateTask />
    </div>
  );
}
export default TodosPage;
