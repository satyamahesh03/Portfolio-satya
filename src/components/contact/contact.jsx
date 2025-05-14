import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {

  const form = useRef();
  const [feedback, setFeedback] = useState({ message: '', visible: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_l4466ri',
        'template_ex13ysi',
        form.current,
        'ZG9IlZ4Yk_QEwqjP7'
      )
      .then(() => {
        setFeedback({ message: '✅ Message sent successfully!', visible: true });
        setTimeout(() => setFeedback({ message: '', visible: false }), 3000);
      })
      .catch(() => {
        setFeedback({ message: '❌ Failed to send message. Please try again.', visible: true });
        setTimeout(() => setFeedback({ message: '', visible: false }), 3000);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>satyamahesh.kolli03@gmail.com</h5>
            <a href='mailto:satyamahesh.kolli03@gmail.com' target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 94942 52900</h5>
            <a href='https://api.whatsapp.com/send?phone=919494252900' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/*............ Contact Options End ...........*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      {feedback.visible && (
        <div style={{
          position: 'fixed',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#205E61',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '500',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          animation: 'fadeSlide 0.3s ease-in-out'
        }}>
          {feedback.message}
        </div>
      )}
    </section>
  )
}

export default Contact