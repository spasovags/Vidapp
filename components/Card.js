import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { useInView } from 'react-intersection-observer';

const Card = (props) => {
  const post = props.value;
  const cardAnim = "cardAnim";
  
  const basePath = '/videos'
  const { ref: cardRef, inView: IsCardsVisible } = useInView({triggerOnce: true, threshold:0.2});

  return (
      <div 
      className={`${styles["card"]}`}
      >     
        <div className={`${styles["photoCont"]}`} >
          <div className={`${styles["photoCard"]}`} >
           <video autoPlay loop>
              <source src={`${basePath}/${post.vid}`} />
           </video>
         </div>           
        </div>    
        <div className={`${styles["text-card"]}`} >
           <p>{post.description}</p>
        </div>   
      </div>
   );
}

export default Card