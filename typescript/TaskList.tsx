import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TaskList.css";

type Task = {
  id: number;
  name: string;
  date: string;
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [newTaskDate, setNewTaskDate] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/data/tasks.json');
      setTasks(response.data);
    };
    fetchData();
  }, []);

  const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newTask: Task = {
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

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Task List</h1>
        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="New task name"
          />
          <input
            type="date"
            value={newTaskDate}
            onChange={(e) => setNewTaskDate(e.target.value)}
          />
          <button type="submit">Crea Task</button>
        </form>
      </div>
      <div className="task-list-container">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.date}
              <button onClick={() => handleDeleteTask(task.id)} className='delete-button'>Elimina</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
