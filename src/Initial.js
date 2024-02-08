import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import logo1 from "./images/logo1.png";
export default function Initial() {
  const Navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      Navigate("/Home");
    }, 3300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="initbackground">
      <img className="initialimg" src={logo1}></img>
    </div>
  );
}
