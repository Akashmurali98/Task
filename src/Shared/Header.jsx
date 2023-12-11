import { Link } from "react-router-dom";
import React from "react";

import "../assets/Css/header.css";

const Nav = () => {
  return (
    <>
      <div className="navHeader">
        <span className="nav1">
          {" "}
          <Link to="/" >Task 1</Link>
        </span>
        <span className="nav2">
          <Link to="/draft">Task 2</Link>
        </span>
        <span className="nav3">
          <Link to="/pdf">Task 3</Link>
        </span>
        
      </div>
    </>
  );
};

export default Nav;
