import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {

  const [isOpen,setIsOpen]=useState(false);

  const toggleMenu=()=>{
    setIsOpen(!isOpen);
  };

  const closeMenu=()=>{
  setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <h2>Xyz Institute</h2>
      <button className={styles.menuButton} onClick={toggleMenu}>
      <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.navbg} ${isOpen ? styles.showMenu : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/courses" onClick={closeMenu}>Courses</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>ContactUs</Link>
        </li>
      </ul>
    </nav>
  );
};
