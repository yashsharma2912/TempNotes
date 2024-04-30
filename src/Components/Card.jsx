import React,{useRef,useState} from 'react'
import { motion } from 'framer-motion';

import { IoIosDocument } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";


// const constraintsRef = useRef(null)

const Card = () => {
     
  return (
    <div className="cardCont" >
    <motion.div drag className='card'>
        <div className="top">
           <IoIosDocument className='doc'/>
           <h3>Task1</h3>
           <IoClose className='close'/> 
        </div>   
        <div className="middle">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia aliquid laboriosam culpa animi dolor, autem ex iste nostrum itaque!</p>
        </div>
        <div className="bot"> 
         <div className="lb">
            <div className="dot"></div>
            <h3>Pending</h3>
         </div>
         <div className="rb">
              <h4>Select Status</h4> 
              <FaAngleDown className='down'/>
         </div>
           
            
        </div>     
    </motion.div>
    </div>
  )
}

export default Card