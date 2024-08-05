import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const TaskItem = ({ taskId, task }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(db, 'tasks', taskId));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 flex items-center justify-between">
      <span className="text-lg">{task}</span>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
