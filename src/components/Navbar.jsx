import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <nav>
      <h2>Xyz Institute</h2>
      <ul className={styles.navbg}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/contact">ContactUs</Link>
        </li>
      </ul>
    </nav>
  );
};
