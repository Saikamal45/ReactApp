import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate=useNavigate();

  const handleLearnMoreClick=()=>{
    navigate('/about');
  };

  return (
    <div className={styles.imageContainer}>
        <div className={styles.text}>
        <p className={styles.para1}>Best Learning</p>
        <p className={styles.para2}>Education Platform </p>
        <p className={styles.para3}>in The World</p>
        <p className={styles.lor}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita deserunt voluptatem modi esse unde cumque, explicabo quidem fugiat maxime beatae. Nulla quas necessitatibus quibusdam est praesentium accusantium quisquam nisi debitis.</p>
        <button onClick={handleLearnMoreClick}>Learn more About Us</button>
        </div> 
        <img src='/images/laptop.jpg' alt='img not found'/>
    </div>
  )
}
