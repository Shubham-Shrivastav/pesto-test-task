import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const TaskForm = () => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      await addDoc(collection(db, 'tasks'), { task });
      setTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg mt-6 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
