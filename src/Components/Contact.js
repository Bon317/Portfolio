import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ isVisible, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleButtonClick = () => {
    onClose();
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    emailjs
      .sendForm('service_zjl6js5', 'template_7lzy0m2', form.current, 'sQdskOXiN-eBsMYdX')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      onClose();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form className={`contact ${isVisible ? 'isVisible' : ''}`} ref={form} id="contact">
      <div className="closeContact">
        <span className="red-x" onClick={handleButtonClick}>
          &#10060;
        </span>
      </div>
      <input
        type="text"
        placeholder="Name"
        name="from_name"
        id="name"
        autoComplete="off"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="from_email"
        id="email"
        autoComplete="off"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        name="subject"
        autoComplete="off"
        value={subject}
        onChange={handleSubjectChange}
      />
      <textarea
        id="message"
        placeholder="Message"
        name="message"
        cols="30"
        rows="10"
        value={message}
        onChange={handleMessageChange}
      />
      <button id="button" onClick={handleSendClick}>
        Send
      </button>
    </form>
  );
};

export default Contact;