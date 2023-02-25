import React, { useState } from 'react'

function Progressbar ({status}) {
    const [style,setStyle]=useState({});
    // console.log(status)
    setTimeout(() => {
      if(status!='block'){

        const newStyle ={
          opacity:1,
          width: `${status}%`
        }
        setStyle(newStyle);
      }
    }, 200);
  return (
    <div className='progress'>
        <div className='progress-done' style={style}></div>
        <h3>{status}%</h3>
    </div>
  )
}
export default Progressbar
