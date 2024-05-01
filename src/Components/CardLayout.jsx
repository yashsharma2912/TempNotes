import React from 'react';
import Card from "./Card";

const CardLayout = ({ tasks }) => {
  return (
    <div className='cardLayout'>
      {tasks.map((task, index) => (
        <Card key={index} task={task} />
      ))}
    </div>
  );
}

export default CardLayout;
