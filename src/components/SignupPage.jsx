import React from 'react';
import Header from './Header';
import SignupForm from './SignupForm';
import Footer from './Footer';

function SignupPage({ sendMessage }) {
  return (
    <div>
      <Header />
      <SignupForm sendMessage={sendMessage} />
      <Footer />
    </div>
  );
}

export default SignupPage;
