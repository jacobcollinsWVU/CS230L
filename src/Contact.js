// Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <h3 style = {{ fontSize: '3em' , paddingTop: '20px' , paddingBottom: '20px' }} >Contact Us</h3>

      {/* First Name */}
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your First Name"
          style={{ width: '900px' }} 
        />
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your Last Name"
          style={{ width: '900px' }}  
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your Phone Number"
          style={{ width: '900px' }}  
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          id="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="Enter your Email Address"
          style={{ width: '900px' }}
        />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter your Country"
          style={{ width: '900px' }}  
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your Message"
          style={{ width: '900px' }} 
        />
      </div>
    </div>
  );
};

export default Contact;
