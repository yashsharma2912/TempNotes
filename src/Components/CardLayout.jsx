import React from 'react';
import Card from "./Card";

const CardLayout = ({ tasks,handleDelete }) => {
  return (
    <div className='cardLayout'>
      {tasks.map((task, index) => (
        <Card key={index} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default CardLayout;
