import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';

const Home = () => {
  return (
    <>
      <Hero/>
      <Biography/>
      <Departments/>
      <MessageForm/>

    </>
  );
}

export default Home;
