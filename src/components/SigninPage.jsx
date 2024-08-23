import React from 'react';
import Header from './Header';
import SigninForm from './SigninForm';
import Footer from './Footer';

function SigninPage({ sendMessage }) {
  return (
    <div>
      <Header />
      <SigninForm sendMessage={sendMessage} />
      <Footer />
    </div>
  );
}

export default SigninPage;
