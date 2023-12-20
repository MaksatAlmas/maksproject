import'./App.css'
import React, { useState } from 'react';


const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div id="todo-container">
      <h2>Задачи</h2>
      <input
        type="text"
        id="task-input"
        placeholder="Добавить"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Добавить</button>
      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.completed ? 'completed' : ''}`}>
            <span>{task.text}</span>
            <input
              type="checkbox"
              className="toggle-checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
};



export default TodoApp;
