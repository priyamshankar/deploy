import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Address() {
    const navigate = useNavigate();
  const [regValues, setregValues] = useState({
    address: "",
    addressline2: "",
    city: "",
    state: "",
    pincode: "",
    ut: "",
    photout: "",
  });

  const regisChange = (event) => {
    setregValues({ ...regValues, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    return () => {
      localStorage.setItem("addressinfo", JSON.stringify(regValues));
    };
  }, [regisChange]);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actionCreators.slider(33));
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
      navigate("/account");
    } else {
      alert("Fill all the columns");
    }
  };


  return (
    <div className="form">
      <form action="post" className="personal-info-form-fields">
        <h1>Address Information </h1>
        <input onChange={(e) => regisChange(e)} type="text" name="address" id="Address" placeholder="Address" />
        <input onChange={(e) => regisChange(e)}
          type="text"
          name="addressline2"
          id="addressline2"
          placeholder="Address Line 2"
        />
        <input onChange={(e) => regisChange(e)} type="text" name="city" id="city" placeholder="City" />
        <input onChange={(e) => regisChange(e)} type="text" name="state" id="State" placeholder="State" />
        <input onChange={(e) => regisChange(e)}
          type="text"
          name="pincode"
          id="pincode"
          placeholder="Enter the Pincode"
        />
        <div className="radial">
          <label htmlFor="ut">Union Territory</label>
          <input onChange={(e) => regisChange(e)} type="radio" name="ut" id="ut" />
        </div>

        <div className="radial">
          <label htmlFor="notut">Normal State</label>
          <input onChange={(e) => regisChange(e)} type="radio" name="ut" id="notut" />
        </div>
        <label htmlFor="photo">Enter your photo</label>
        <input onChange={(e) => regisChange(e)} type="file" name="photout" id="photo" />
        <div className="navigation-button">
          <button
            className="button prev"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <NavLink to="/personalinfo">prev</NavLink>
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
  );
}

export default Address;
