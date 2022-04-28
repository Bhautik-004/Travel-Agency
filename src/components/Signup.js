import React, { useState } from 'react';
import smsHandler from './Sms';

function Signup() {

  
  const [name, setName] = useState('');
  const [errName, setErrName] = useState('');

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');

  const [contact, setContact] = useState('');
  const [errContact, setErrContact] = useState('');

  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const [ableToSignUp, setAbleToSignUp] = useState(false);

  function validationHandler(type, val) {
    switch (type) {
      case 'name':
        let nameValid = val.match(/[a-zA-Z]/);
        setErrName(nameValid ? null : 'Enter Valid Name...!');
        setName(val);
        break;
      case 'email':
        let emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        setErrEmail(emailValid ? null : 'Invalid Email...!');
        setEmail(val);
        break;
      case 'contact':
        let contactValid = val.match(/[1-9]{1}[0-9]{9}/) && val.length == 10;
        setErrContact(contactValid ? null : 'Enter valid contact...!');
        setContact(val);
        break;
      case 'password':
        let passValid = val.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        setErrPassword(passValid ? null : 'Enter valid Password...!');
        setPassword(val);
        break;
    }
    if (errName == null && errEmail == null && errContact == null && errPassword == null) {
      setAbleToSignUp(true);
    }
  }

  return (
    <>
      <form className='w-50 mx-auto mt-5 border p-5'>
        <div className="form-group">
          <div className='d-flex justify-content-between'>
            <label className='font-weight-bold'>Name :</label>
            <p className='m-0 text-danger font-weight-bold'>{errName}</p>
          </div>
          <input
            type="text"
            name='name'
            className="form-control"
            placeholder="Enter Full Name"
            onChange={(e) => validationHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className='d-flex justify-content-between'>
            <label className='font-weight-bold'>Email :</label>
            <p className='m-0 text-danger font-weight-bold'>{errEmail}</p>
          </div>
          <input
            type="email"
            name='email'
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => validationHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className='d-flex justify-content-between'>
            <label className='font-weight-bold'>Contact :</label>
            <p className='m-0 text-danger font-weight-bold'>{errContact}</p>
          </div>
          <input
            type="number"
            name='contact'
            className="form-control"
            placeholder="Enter Contact"
            onChange={(e) => validationHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className='d-flex justify-content-between'>
            <label className='font-weight-bold'>Password :</label>
            <p className='m-0 text-danger font-weight-bold'>{errPassword}</p>
          </div>
          <input
            type="password"
            name='password'
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => validationHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className='w-100'>
          <button
            className='btn btn-success d-block mx-auto mt-5'
            disabled={!ableToSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  )
  
}

export default Signup;
