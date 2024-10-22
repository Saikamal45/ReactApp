import React from 'react'
import styles from'./Courses.module.css';

export const Courses = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1>Courses We Offer</h1>
        <ul className={styles.list}>
          <li>Java Full Stack</li>
          <p>Learn full-stack web development using Java, Spring Boot, and React. Master both front-end and back-end development with industry-relevant skills.</p>
          <li>Python Full Stack</li>
          <p>Become proficient in Python, Django, and Angular for building modern web applications with both server-side and client-side technologies.</p>
          <li>Frontend Development</li>
          <p>Gain expertise in HTML, CSS, JavaScript, and React to build beautiful and responsive user interfaces for modern web applications.</p>
          <li>CyberSecurity</li>
          <p>Learn the foundations of cybersecurity, including network security, ethical hacking, and encryption to protect organizations from cyber threats.</p>
          <li>Devops With AWS</li>
          <p>Master DevOps practices like CI/CD, infrastructure automation, and cloud computing using AWS, Docker, Kubernetes, and Terraform.</p>
          <li>SalesForce</li>
          <p>Explore the world of Salesforce CRM, mastering tools like Sales Cloud, Service Cloud, and Lightning to drive business growth.</p>
          <li>Automation Testing</li>
          <p>Learn automation testing tools like Selenium, JUnit, and TestNG to ensure high-quality software delivery with efficient test automation.</p>
        </ul>
      </div>
      <img src='/images/pic2.jpg' alt='img not found'></img>
    </div>
  )
}
