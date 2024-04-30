import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";


const Card = () => {
  return (
    <div className='card'>
        <div className="top">
           <IoIosDocument className='doc'/>
           <IoClose className='close'/> 
        </div>   
        <div className="middle">
        
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
    </div>
  )
}

export default Card