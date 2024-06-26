import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosDocument } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { FaAngleDown } from "react-icons/fa6";

const Card = ({ index,task,handleDelete }) => {
  const [status, setStatus] = useState(false);
  const [changeState, setChangeState] = useState("pending");

  const statusChange = (curStatus) => {
    setChangeState(curStatus);
    setStatus(false);
  };

  const deleteTask = () => {
    handleDelete(index);
  }

  return (
    <div className="cardCont">
      <motion.div drag className='card'>
        <div className="top">
          <IoIosDocument className='doc'/>
          <h3>TempNote</h3>
          <IoClose onClick={deleteTask} className='close'/> 
        </div>
        <div className="middle">
          <p>{task}</p>
        </div>
        <div className="bot"> 
          <div className="lb">
            <div className={changeState === "Pending" ? "dot yellow" : changeState === "Urgent" ? "dot red" : changeState === "Solved" ? "dot green" : null}></div>
            {changeState === "Pending" ?  <h3>Pending</h3> : changeState === "Urgent" ? <h3>Urgent</h3> : changeState === "Solved" ? <h3>Solved</h3> : null }
          </div>
          <div className="rb">
            <h4 onClick={() => setStatus(!status)}>Select Status  <FaAngleDown className='down'/></h4> 
            {status && (
              <div className="selectStatus">
                <span onClick={() => statusChange("Pending")}>Pending</span>
                <span onClick={() => statusChange("Urgent")}>Urgent</span>
                <span onClick={() => statusChange("Solved")}>Solved</span>
              </div>
            )}
          </div>
        </div>     
      </motion.div>
    </div>
  );
}

export default Card;
