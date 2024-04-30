import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Card = () => {
  return (
    <div className='card'>
        <div className="top">
           <IoIosDocument className='doc'/>
           <IoClose className='close'/> 
        </div>        
    </div>
  )
}

export default Card