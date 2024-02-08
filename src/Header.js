import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import logo2 from "./images/logo2.png";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 65);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [currentPage, setCurrentPage] = useState(0);

  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);
  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="divnav">
        <Link to="/Home">
          <h2 className="htext">HOME</h2>
        </Link>
        <Link to="/Caes">
          <h2 className="htext">CÃES</h2>
        </Link>
        <Link to="/Gatos">
          <h2 className="htext">GATOS</h2>
        </Link>
        <div className="divimg">
          <img className="imglogo" src={logo2} />
        </div>
      </div>
    </nav>
  );
}
