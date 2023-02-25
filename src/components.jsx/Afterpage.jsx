import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionCreators } from "../state/index";

function Afterpage() {
  const [personalinfo, setpersonalinfo] = useState(
    JSON.parse(localStorage.getItem("personalInfo"))
  );

  const [addressinfo,setaddressinfo] = useState(JSON.parse(localStorage.getItem("addressinfo")));

  const [accountinfo,setaccountinfo] = useState(JSON.parse(localStorage.getItem("accountInfo")));
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actionCreators.slider(100));
    };
  }, []);
  return (
    <div className="afterpageoutput">
      <div className="personal-info-form-fields">
        <h1>Afterpage</h1>
        <h2>Personal Info</h2>
        <p>First Name : {personalinfo.fname}</p>
        <p>Last Name : {personalinfo.lname}</p>
        <p>Email Id : {personalinfo.email}</p>
        <p>Name of university : {personalinfo.univname}</p>
        <p>Photo</p>
        <h2>Address Info</h2>
        <p>Address Line 1 : {addressinfo.address}</p>
        <p>Address line 2 : {addressinfo.addressline2}</p>
        <p>City : {addressinfo.city}</p>
        <p>State : {addressinfo.state}</p>
        <p>photo</p>

        <h2>Account Info</h2>
        <p>User ID : {accountinfo.userid}</p>
        <p>Account No. {accountinfo.acc}</p>
        <p>photo</p>
      </div>
    </div>
  );
}

export default Afterpage;
