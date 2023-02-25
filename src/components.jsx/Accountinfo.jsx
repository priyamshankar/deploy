import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { actionCreators } from "../state/index";


function Accountinfo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [regValues, setregValues] = useState({
      userid:"", 
      pass:"",
      cnfm:"",
      acc:"",
      bankbranch:"",
      type:"",
      photoacc:""
    });

    const regisChange = (event) => {
      setregValues({ ...regValues, [event.target.name]: event.target.value });
    };
  
    useEffect(() => {
      return () => {
        localStorage.setItem("accountInfo",JSON.stringify(regValues));
      }
    }, [regisChange])
    
  
    useEffect(() => {
      return () => {
        dispatch(actionCreators.slider(70));
      };
    }, []);


  const formValidation = (e) => {
    e.preventDefault();
    let count = 0;
    Object.values(regValues).forEach((val) => {
      if (val === "") {
        // alert("empty");
        count++;
      }
    });

    if (count === 0) {
      navigate("/submit");
    } else {
      alert("Fill all the columns");
    }
  };

  
    return (
      <div className="form">
        <form action="post" className="personal-info-form-fields">
          <h1>Account Information</h1>
          <input onChange={(e) => regisChange(e)} type="text" name="userid" id="f-name" placeholder="userId" />
          <input onChange={(e) => regisChange(e)} type="text" name="pass" id="l-name" placeholder="Password" />
          <input onChange={(e) => regisChange(e)} type="text" name="cnfm" id="email" placeholder="confirm password" />
          <input onChange={(e) => regisChange(e)}
            type="text"
            name="acc"
            id="acc"
            placeholder="Account No."
          />
          <input onChange={(e) => regisChange(e)}
            type="text"
            name="bankbranch"
            id="bankbranch"
            placeholder="bank branch"
          />
  
          <label htmlFor="savings">Savings Account</label>
          <input onChange={(e) => regisChange(e)} type="radio" name="type" id="savings" />
          <label htmlFor="current">current account</label>
          <input onChange={(e) => regisChange(e)} type="radio" name="type" id="current" />
  
          <label htmlFor="photoacc">Enter your photo</label>
          <input onChange={(e) => regisChange(e)} type="file" name="photoacc" id="photoacc" />
          <div className="navigation-button">
            <button
            className="button prev"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <NavLink to="/address">Prev</NavLink>
          </button>
          <button
            className="button next"
            onClick={(e) => {
              formValidation(e);
            }}
          >
            Next
          </button>
          </div>
        </form>
      </div>
  )
}

export default Accountinfo