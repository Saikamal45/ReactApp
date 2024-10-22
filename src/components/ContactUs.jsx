import React from 'react'
import styles from './ContactUs.module.css';

export const ContactUs = () => {
  return (
    <>
    <h1 className={styles.heading}>Contact Us</h1>
    <div className={styles.contact}>
         <form>
          <table>
            <h1>Send Us A Message</h1>
            <tr>
              <td><label>Tell Us Your Name</label></td>
            </tr>
            <tr>
            <td><input type='text' placeholder='FirstName' required/>
            <input type='text' placeholder='LastName' required/></td>
            </tr>
            <tr>
              <td><label>Enter Your Email</label></td>
            </tr>
            <tr>
            <td><input type='email' placeholder='abc@gmail.com' required/></td>
            </tr>
            <tr>
              <td><label>Enter Your Phone Number</label></td>
            </tr>
            <tr>
              <td><input type='number' placeholder='9876543210' required/></td>
            </tr>
            <tr>
              <td><label>Enter Your Message</label></td>
            </tr>
            <tr>
              <td><input type='text' placeholder='Write us a Message.' required/></td>
            </tr>
            <button>Send Message</button>
          </table>
         </form>
    </div>
    </>
    
  )
}
