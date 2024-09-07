import React from 'react';
import Ellipses from "../components/Ellipses";
import Navbar from '../components/Navbar';
import styles from './Aboutus.module.css';
import Nexsuscard from '../components/Nexsuscard';
import diyad from '../assets/diyad.jpeg'
import akaashe from '../assets/akaashhh.png'
import shreya from '../assets/shreyaaa.png'
import renee from '../assets/reneee.png'
import jahanvi from '../assets/jahanviii.png'
import pratyushk from '../assets/pratyushhhh.png'
// import urvig from '../assets/uggg.jpg'
import urvig from '../assets/urviii.png'

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
          <Nexsuscard imagelink={akaashe} pname={"Akaash Emmanuel"} gitlink={"https://github.com/akaash-emmanuel"} gitdis={"@akaash-emmanuel"}></Nexsuscard>
          <Nexsuscard imagelink={jahanvi} pname={"Jahanvi Singh"} gitlink={"https://github.com/jahanvi513"} gitdis={"@jahanvi1513"}></Nexsuscard>
          <Nexsuscard imagelink={urvig} pname={"Urvi Gupta"} gitlink={"https://github.com/urviiigupta"} gitdis={"@urviiigupta"}></Nexsuscard>
          <Nexsuscard imagelink={pratyushk} pname={"Pratyush Kamal"} gitlink={"https://github.com/pratyush0000"} gitdis={"@pratyush0000"}></Nexsuscard>
          <Nexsuscard imagelink={shreya} pname={"Shreya Aggarwal"} gitlink={"https://github.com/shrey-aa12"} gitdis={"@shrey-aa12"}></Nexsuscard>
          <Nexsuscard imagelink={renee} pname={"Renee Mohan"} gitlink={"https://github.com/re-nee07"} gitdis={"@re-nee07"}></Nexsuscard>
        </div>
      </div>
    </>
  );
};
export default Aboutus;
