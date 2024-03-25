// import React from 'react';
// import Navbar from '../components/Navbar';

// const About = () => {
//   return(
//     <>
//     <Navbar/>
//     Hello from home.
//     </>
//   )
// }
// export default About;


import React from 'react';
import { Link } from 'react-router-dom';
import Ellipses from "../components/Ellipses";
import Navbar from "../components/Navbar";
import image from "../assets/babel_home_final.png";
import styles from './home.module.css';

const home = () => {
  return (
    <>
      <Navbar />
      <Ellipses/>
      <div style={styles.spacer}>
      </div>
      <div className={styles.container}>

        {/* Text and buttons div */}
        <div style={{ flex: 2, marginLeft: '45px' }}>
          <div>
            {/* <h1 className={`${styles.bold} ${styles.heading}`}>
              <span className={styles.largeText}>BABEL</span>
              <div className={styles.empty1}></div>
            </h1> */}
            <p className={`${styles.text} ${styles.believeText}`}> 
            Welcome to Babel, where art and technology converge to transcend language barriers. Our advanced AI redefines translation, preserving original meaning and emotion. Unlike traditional methods, we offer comprehensive solutions for text, paragraphs, and phrases. Precision and innovation guide us as we blend human expression with computational power for enhanced understanding. Babel signifies a paradigm shift in linguistic innovation, inviting you to elevate communication to new heights. Join us in unlocking the true potential of language and technology..
            </p>
          </div>

          <div style={{ marginTop: '60px' }}>
            {/* <button className={styles.button}>Test It Out</button> */}
            <Link to="/product" className={styles.button}>Test It Out</Link>
            {/* <button className={styles.button}>Who Are We?</button> */}
            <Link to="/aboutus" className={styles.button}>Who Are We?</Link>
          </div>
        </div>
        {/* Image div */}
        <div style={{ flex: 1 }} className={styles.imagecontainer}>
          <img src={image} alt="The Food Barn" className={styles.image} />
        </div>
      </div>
      
    </>
  );
};

export default home;