import React, {useState} from 'react';
import "./inputField.css";
function Field() {
  const [data, setData]=useState(null)
  function getData(val){
    setData(val.target.value)
    console.log(val.target.value)
  }
  return (
        <div className='input-field'>
          <input type="text" placeholder="Enter text here" onChange={getData} />
        </div>
        //{/* <div className='input-field'> Result</div> */}
  )
}

export default Field