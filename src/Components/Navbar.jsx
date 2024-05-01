import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

const Navbar = ({ addTask }) => {
  const [cf, setCf] = useState(false);
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
    setCf(false);
  };

  return (
    <div className="navbar">
      <h3>Document</h3>
      <p>Disclaimer: once you refresh the page then you will lost your all notes</p>
      <div className="add">
        <button onClick={() => setCf(!cf)}>
          <IoMdAdd className={cf ? 'addbtn activa' : 'addbtn'}/>
        </button>
        {cf && (
          <form onSubmit={handleSubmit} className="cardForm">
            <textarea 
              type="text"
              value={taskText}
              maxLength={300}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder='Write your short note...📝' 
            />
            <button type="submit">Add Note</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
