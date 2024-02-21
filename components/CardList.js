import React, { useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/CardList.module.css'


const CardList = ({technologies}) => {
  const inter = "sect";
  const [scrolling, setScrolling] = useState(false);
  const changeOpacity = () => {
    setScrolling((current) => !current);
  };
  const setOpacityOne = () => {
    setScrolling(false);
  };
   return (   
    <section className={`${styles["techstack-container"]}`}
    onScroll={changeOpacity} onscrollend={setOpacityOne} id={inter}>
       {technologies.map((technology, index) =>
        <Card key={technology.id} scrolling={scrolling} indexAnim={index} value={technology}/>)}       
    </section>
  )
}

export default CardList