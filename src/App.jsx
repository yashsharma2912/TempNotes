import { useState } from 'react';
import "./style.scss";
import Navbar from './Components/Navbar';
import CardLayout from './Components/CardLayout';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="main">
      <Navbar addTask={addTask} />
      <h1>TempNotes</h1>
      <CardLayout tasks={tasks} />
    </div>
  );
}

export default App;
