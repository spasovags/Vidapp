import React, { useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/CardList.module.css'
import Navbar from './Navbar'

const CardList = ({technologies}) => {
  const idSect ="currCar";

  function handleDataFromChild(commentsShown) {

    if (commentsShown) {
      const sect = document.querySelector(`#${idSect}`);
      sect.classList.add(`${styles["noscroll"]}`);
    }
    else {
      const sect = document.querySelector(`#${idSect}`);
      sect.classList.remove(`${styles["noscroll"]}`);
    }
  }

   return (   
    <>
     <Navbar />
     <section id={idSect} className={`${styles["techstack-container"]}`}>
       {technologies.map((technology, index) =>
        <Card sendDataToParent={handleDataFromChild} key={technology.id} indexAnim={index} value={technology}/>)}       
     </section>
    </>
  )
}

export default CardList