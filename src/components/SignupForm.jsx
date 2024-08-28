import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWebSocket } from '../WebSocketProvider';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { sendMessage, setUsername } = useWebSocket(); // Include setUsername

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = {
      username: name,
      email: email,
      password: password,
    };

    sendMessage('/app/signup', message, (response) => {
      if (response.code === 100) {
        setUsername(name); // Set the username in context
        navigate('/ChessBoard'); 
      } else {
        alert(response.message); 
      }
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-10 col-lg-6 col-xl-5">
        <p className="text-center text-body h1 fw-bold mb-1 mt-4">Sign up</p>
        <form onSubmit={handleSubmit}> 
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas text-body fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="text"
                id="form3Example1c"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="form3Example1c">Your Name</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas text-body fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas text-body fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4c"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="form3Example4c">Password</label>
            </div>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="submit" className="btn btn-primary btn-lg">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
