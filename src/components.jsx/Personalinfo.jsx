import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { actionCreators } from "../state/index";

function Personalinfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [regValues, setregValues] = useState({
    fname: "",
    lname: "",
    email: "",
    univname: "",
    branch: "",
    gender: "",
    photo: "",
  });

  const regisChange = (event) => {
    setregValues({ ...regValues, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    return () => {
      localStorage.setItem("personalInfo", JSON.stringify(regValues));
    };
  }, [regisChange]);

  useEffect(() => {
    return () => {
      dispatch(actionCreators.slider(10));
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
      navigate("/address");
    } else {
      alert("Fill all the columns");
      // dispatch(actionCreators.alertCloseBtn("block"));
    }
  };

  return (
    <div className="form">
      <form action="post" className="personal-info-form-fields">
        <h1>Personal Information</h1>
        <input
          onChange={(e) => regisChange(e)}
          type="text"
          name="fname"
          id="f-name"
          placeholder="First Name"
        />
        <input
          onChange={(e) => regisChange(e)}
          type="text"
          name="lname"
          id="l-name"
          placeholder="Last Name"
        />
        <input
          onChange={(e) => regisChange(e)}
          type="text"
          name="email"
          id="email"
          placeholder="Email Id"
        />
        <input
          onChange={(e) => regisChange(e)}
          type="text"
          name="univname"
          id="univ-name"
          placeholder="Name of University"
        />
        <input
          onChange={(e) => regisChange(e)}
          type="text"
          name="branch"
          id="branch"
          placeholder="Branch ex : CSE or ECE"
        />

        <label htmlFor="male">Male</label>
        <input
          onChange={(e) => regisChange(e)}
          type="radio"
          name="gender"
          id="male"
        />
        <label htmlFor="female">Female</label>
        <input
          onChange={(e) => regisChange(e)}
          type="radio"
          name="gender"
          id="female"
        />

        <label htmlFor="photo">Enter your photo</label>
        <input
          onChange={(e) => regisChange(e)}
          type="file"
          name="photo"
          id="photo"
        />
        <div className="navigation-button">
          
          <button
            className="button prev"
            onClick={(e) => {
              formValidation(e);
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Personalinfo;
