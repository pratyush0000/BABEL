import React from 'react';
import Ellipses from "../components/Ellipses";
import Navbar from '../components/Navbar';
import styles from './Aboutus.module.css';
import Nexsuscard from '../components/Nexsuscard';
import diyad from '../assets/diyad.jpeg'
import pratyushk from '../assets/pratyushk.jpeg'
import urvig from '../assets/uggg.jpg'

const Aboutus = () => {
  return(
    <>
      <Navbar/>
      <Ellipses/>
      <div className={styles.meettheteam}>
        <div className={styles.mttheading} >
            THE TEAM
        </div>
        <div className={styles.aboutprojectbox}>
          <Nexsuscard imagelink={diyad} pname={"Diya Dugar"} gitlink={"https://github.com/Diyadx"} gitdis={"@diyadx"}></Nexsuscard>
          <Nexsuscard imagelink={pratyushk} pname={"Pratyush Kamal"} gitlink={"https://github.com/pratyush0000"} gitdis={"@pratyush0000"}></Nexsuscard>
          <Nexsuscard imagelink={urvig} pname={"Urvi Gupta"} gitlink={"https://github.com/urviiigupta"} gitdis={"@urviiigupta"}></Nexsuscard>
        </div>
      </div>
    </>
  );
};
export default Aboutus;
