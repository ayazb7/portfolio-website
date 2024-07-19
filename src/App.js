import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './about/About';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Footer from './components/Footer';
import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWL6tjNFtbtl_oHLkBwSOL6enbVgHE07A",
  authDomain: "portfolio-c2607.firebaseapp.com",
  projectId: "portfolio-c2607",
  storageBucket: "portfolio-c2607.appspot.com",
  messagingSenderId: "174740778775",
  appId: "1:174740778775:web:511a71d66a75944de5d152",
  measurementId: "G-1Y1739XJEQ"
};

const app = initializeApp(firebaseConfig);

function App() {
  useEffect(() => {
    getAnalytics(app);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
