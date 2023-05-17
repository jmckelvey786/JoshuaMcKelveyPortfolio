import {React, useState} from 'react'
import "../styles/navbar.css"


const Contact = () => {
  const [tagInputVal, setTagInputVal] = useState("");

  function onChangeTagInput(e) {
    setTagInputVal(e.target.value.replace(/\S+@\S+\. \S+/ig, ""));
}

  return (
    <div name='contact' className='flex flex-column justify-content-center align-items margin-10px padding-20px'>
      <div className='flex flex-column justify-content-center align-items border-box-shadow border-radius-20 bg-color-light-cadet'>
      <form action='mailto:mckelveywarner@gamil.com' method ='POST' className='gradient2 flex flex-column justify-content-center align-items padding-20px margin-10px width-75 border-box-shadow border-radius-20'>
        <div className=''>
            <h2 className='text-align'>Contact</h2>
            <p className='text-align padding-10px'>Submit the form below or email me @ mckelveywarner@gmail.com</p>
        </div>
        <div className='flex flex-column justify-content-center align-items-left space-around width-100'>
        <label>Name:</label>
        <input className='width-75 border-box-shadow-inset4th input padding-5px' type='text' placeholder='Name' name='name'></input>
        <br></br>
        <label>Email:</label>
        <input className='width-75 border-box-shadow-inset4th input padding-5px' type='email' placeholder='Email' name='email' value={tagInputVal} onChange={(e) => onChangeTagInput(e)}></input>
        <br></br>
        <textarea className='width-75 border-box-shadow-inset4th input padding-5px' name='message' rows='10' placeholder='Message'></textarea>
        <button className='btn'><h3>Send</h3></button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact