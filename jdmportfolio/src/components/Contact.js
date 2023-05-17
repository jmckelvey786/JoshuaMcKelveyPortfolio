import {React, useState} from 'react'


const Contact = () => {
  const [tagInputVal, setTagInputVal] = useState("");

  function onChangeTagInput(e) {
    setTagInputVal(e.target.value.replace(/\S+@\S+\. \S+/ig, ""));
}

  return (
    <div name='contact' className=''>
      <form action='' method ='POST' className=''>
        <div className=''>
            <p className=''>Contact</p>
            <p className=''>Submit the form below or email me @ mckelveywarner@gmail.com</p>
        </div>
        <input className='' type='text' placeholder='Name' name='name'></input>
        <input className='' type='email' placeholder='Email' name='email' value={tagInputVal} onChange={(e) => onChangeTagInput(e)}></input>
        <textarea className='' name='message' rows='10' placeholder='Message'></textarea>
        <button className=''>Send</button>
      </form>
    </div>
  )
}

export default Contact