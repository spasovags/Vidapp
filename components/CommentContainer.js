import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'


const CommentContainer = (props) => {

    return (
        <div className={`${styles["commentContainer"]}`} >
            <Image
              src={props.profpicComment}
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <div className={`${styles["commentInfo"]}`} >
                <p className={`${styles["commentUsername"]}`}>
                  {props.commentUsername}
                </p>
                <p className={`${styles["thecomment"]}`}>
                  {props.thecomment}
                </p>
                <div className={`${styles["commentActionsData"]}`} >
                  <div className={`${styles["commentData"]}`} >
                    <p>
                     {props.time}
                    </p>
                    <button>Reply</button>
                  </div>
                  <div className={`${styles["commentActions"]}`} >
                  <button></button> 
                    <p>
                     {props.commentLikes}
                    </p>
                    <button></button>            
                  </div>
                </div>
                <div className={`${styles["commentReplies"]}`} >
                </div>
            </div>
        </div>
    ) 
}