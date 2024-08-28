import React from 'react';
import chessBoard from '../assets/chessBoard.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Hero() {
    return (
      <div className="container col-xxl-8 px-4 py-4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={chessBoard}
              className="d-block mx-lg-auto img-fluid"
              alt="Chess Board"
              width="640"
              height="640"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcone to my chess app created by RdEad (Daniel)
            </h1>
            <p className="lead">
              this is a project made using react as the frondend for the web application 
              and Java Spring to manage the backend in this chess game you will be able to 
              play against friends, play against the computer or just study sonme openings and
              analze your game. didnt sign up yet? now its the time
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button as={Link} to="/signin" variant="primary" size="lg" className="px-4 me-md-2">
                Sign In
              </Button>
              <Button as={Link} to="/signup" variant="outline-secondary" size="lg" className="px-4">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  

