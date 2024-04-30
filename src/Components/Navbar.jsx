import React,{useState} from 'react'
import "../style.scss"


const Navbar = () => {
    //set Form
    const[cf,setCf] = useState(true);
  return (
    <div className="navbar">
         <h3>Document</h3>
         <div className="add">
             <button onClick={() => setCf(!cf)}>Add</button>
            {cf && (<div className="cardForm">
                  <input type="text" name='note' placeholder='Write your short note...📝' />
                  <button>Add Note</button>
             </div>) }
         </div>
    </div>
  )
}

export default Navbar