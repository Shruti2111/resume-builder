import React, { useRef } from 'react';
import './Contact1.css';
import emailjs from '@emailjs/browser';
import InputControl from './InputControl';
import feedback from '../asset/feedback.png';

export const Contact1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uungtzd', 'template_5vmjnuk', form.current, 'm_6K601A2C0BXHg6q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <center>
            <div className="container border"
                style={{
                    marginTop: "50px",
                    width: "70%",
                    height: "90%",
                    backgroundImage: {feedback},
                    backgroundPosition: 'center',
                    backgroundSize: "cover"
                }}>
        
            <center>
                    <h1 style={{ marginTop: '35px', color: "#006E7F"  }} >SEND  US  A  MESSAGE </h1>
          </center>
    

    <form ref={form} className="flex1" onSubmit={sendEmail} >
      <center>
      <label>Name</label>
      <InputControl type="text" name="user_name" style={{ marginTop: "10px" }} align="middle" />
      </center>

      <center>
      <label>Email</label>
      <InputControl type="email" name="user_email" style={{ marginTop: "10px" }} align="middle"  />
      </center>

      <center>
      <label className='Msg'>Message</label>
      <textarea name="message" rows='5' cols='40' style={{ marginTop: "30px" }} align="middle" />
      <button type="submit" value="Send"  className="Send" align="bottom" />
      </center>
    </form>
    </div>
 </center>
  );
};

export default Contact1;