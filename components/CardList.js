import React from 'react'
import Card from '../components/Card'
import styles from '../styles/CardList.module.css'


const CardList = ({technologies}) => {

   return (   
    <section className={`${styles["techstack-container"]}`}>
       {technologies.map((technology, index) =>
        <Card key={technology.id} indexAnim={index} value={technology}/>)}       
    </section>
  )
}

export default CardList