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
 
  //function to delete task 
  const handleDelete = (index) => {
    let reduceTask = [...tasks];
    reduceTask.splice(index);

    setTasks(reduceTask);
  };
  return (
    <div className="main">
      <Navbar addTask={addTask} />
      <h1>TempNotes</h1>
      <CardLayout tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
