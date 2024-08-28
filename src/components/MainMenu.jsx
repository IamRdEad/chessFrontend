import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Btn from './Btn';
import bg from '../assets/bg.png';

const MainMenu = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div  
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          gap: '30px',
          backgroundColor: 'rgba(0, 0, 10, 0.7)',  
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <h1 className='text-primary'>Welcome {username}</h1>
        <Btn name="Play Vs Bot" />
        <Btn name="Create A Room" />
        <Btn name="Join A Room" />
        <Btn name="Study" />
        <Btn name="My Profile" />
      </div>
      <Footer />
    </div>
  );
}

export default MainMenu;
