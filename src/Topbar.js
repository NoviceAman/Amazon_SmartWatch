import React from "react";
import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <header>
      <nav className={classes.topbar}>
        <img
          src="https://rdwgroup.com/wp-content/uploads/2013/08/Amazon-800x450-1.jpg"
          alt="Amazon Logo"
        />
      </nav>
    </header>
  );
};

export default Topbar;
