import axios from 'axios';
import { useState, useEffect } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/data/tasks.json');
      setTasks(response.data);
    };
    fetchData();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        id: tasks.length + 1,
        name: newTaskName,
        date: newTaskDate,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
      setNewTaskDate('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="tasklist-container">
      <div className="form-container">
        <h1>Task List</h1>
        <form onSubmit={handleCreateTask}>
          <div className="form-group">
            <label htmlFor="taskName">Task Name:</label>
            <input
              type="text"
              id="taskName"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder="Enter task name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDate">Task Date:</label>
            <input
              type="date"
              id="taskDate"
              value={newTaskDate}
              onChange={(e) => setNewTaskDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className="task-list-container">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <strong>{task.name}</strong>
                <p>Date: {task.date}</p>
              </div>
              <button onClick={() => handleDeleteTask(task.id)} className='delete-button'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
