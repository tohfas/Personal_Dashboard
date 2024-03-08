// src/components/TaskManager.js
import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-md">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter new task"
          className="flex-1 p-2 border rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={addTask}>
          Add
        </button>
      </div>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="mb-2 flex items-center">
              <span
                className={`flex-1 mr-2 ${task.completed ? 'line-through' : ''}`}
              >
                {task.text}
              </span>
              <button
                className="p-1 bg-green-500 text-white rounded mr-2"
                onClick={() => toggleCompletion(index)}
              >
                {task.completed ? 'Uncomplete' : 'Complete'}
              </button>
              <button
                className="p-1 bg-red-500 text-white rounded"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManager;
