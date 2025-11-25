import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/Skills'; // Using Skills as the technical detail section
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Skills from './components/Skills';

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <ChatWidget />
    </Layout>
  );
}

export default App;