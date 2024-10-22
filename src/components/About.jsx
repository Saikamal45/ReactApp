import React from 'react'
import styles from './About.module.css'
export const About = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.textContainer}>
      <h1>About XYZ Institute</h1>
      <p>Welcome to XYZ Institute, where we turn your passion for technology into a successful career. With a commitment to providing the highest quality education and training in Information Technology, we offer a wide range of cutting-edge courses designed to meet the demands of the fast-evolving tech industry.</p>
   <h1>Why Choose XYZ Institute?</h1>
   <p>At XYZ Institute, we believe in nurturing talent, fostering innovation, and preparing students to become leaders in the IT field. Our curriculum is crafted to ensure that you gain both theoretical knowledge and hands-on experience, giving you the skills to thrive in today’s competitive job market.</p>
   <p>Industry-Relevant Courses: Our programs are designed to align with the latest trends and demands of the IT sector. From web development to cloud computing, we offer comprehensive courses that are in high demand by employers.</p>
   <p><span>Experienced Faculty:</span> Learn from industry experts with years of practical experience who are passionate about teaching and mentoring.</p>
   <p><span>Hands-On Learning: </span> We emphasize practical learning with real-world projects, workshops, and labs that ensure you gain the necessary skills to succeed in your chosen field.</p>
   <p><span>Flexible Learning Options:</span> Whether you're a full-time student or a working professional, our flexible learning schedules, including online and weekend classes, make it easy to balance your education with your life.</p>
   <h1>Our Vision</h1>
   <p>Our vision is to empower students to achieve excellence in their chosen IT careers by providing innovative learning solutions that bridge the gap between academic theory and industry requirements. We aim to produce graduates who are ready to tackle the challenges of tomorrow's tech world with confidence and creativity.</p>
   </div>
   <img src='/images/Ex.jpg' alt='img not found'/>
    </div>
  )
}
