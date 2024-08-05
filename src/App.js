import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

const App = () => {
  const [filter, setFilter] = useState('All');
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const handleSave = () => {
    setUpdateTrigger(!updateTrigger);
  };

  return (
    <div>
      <TaskForm onSave={handleSave} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList filter={filter} updateTrigger={updateTrigger} />
    </div>
  );
};

export default App;
