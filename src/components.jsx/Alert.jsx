import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Alert({disp}) {
  const [displays,setdisplay]=useState({
    display: 'none'
  })

useEffect(() => {
  return () => {
    // setdisplay=disp;
    const newStyle ={
      display: {disp}
    }
    setdisplay(newStyle);
    console.log(disp);
  }
}, [disp])

  const close=()=>{
    // alertBox.style.display="none";
    setdisplay({
      display: 'none'
    });
  }
  return (
    <div className="Alert" style={displays}>
      <button onClick={close}>X</button>
      <p>Enter All the Fields.</p>
    </div>
  );
}

export default Alert;
