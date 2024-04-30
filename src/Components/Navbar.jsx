import React,{useState} from 'react'
import "../style.scss"
import { IoMdAdd } from "react-icons/io";



const Navbar = () => {
    //set Form
    const[cf,setCf] = useState(false);
    //active 
    const[active,setActive] = useState(false);
  return (
    <div className="navbar">
         <h3>Document</h3>
         <div className="add">
             <button onClick={() => setCf(!cf)}><IoMdAdd className={cf ? 'addbtn activa' : 'addbtn'}/></button>
            {cf && (<div className="cardForm">
                  <textarea type="text" name='note' placeholder='Write your short note...📝' />
                  <button>Add Note</button>
             </div>) }
         </div>
    </div>
  )
}

export default Navbar