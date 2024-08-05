import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-md w-full m-3 bg-white border border-gray-300 rounded-lg shadow-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 py-2 px-4 text-gray-700"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Filter;
