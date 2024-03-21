import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/CommentContainer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


const CommentContainer = (props) => {

    return (
        <div className={`${styles["commentContainer"]}`} >
            <Image
              src={props.replies.profpicComment}
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <div className={`${styles["commentInfo"]}`} >
                <p className={`${styles["commentUsername"]}`}>
                  {props.replies.commentUsername}
                </p>
                <p className={`${styles["commented"]}`}>
                  {props.replies.thecomment}
                </p>
                <div className={`${styles["commentActionsData"]}`} >
                  <div className={`${styles["commentData"]}`} >
                    <p>
                     {props.replies.time}
                    </p>
                    <button>Reply</button>
                  </div>
                  <div className={`${styles["commentActions"]}`} >
                  <button>
                    <FontAwesomeIcon icon={faHeart} />
                  </button> 
                    <p>
                     {props.replies.commentLikes}
                    </p>
                    <button>
                      <span class="material-symbols-outlined">
                        thumb_down
                      </span>
                    </button>            
                  </div>
                </div>
                <div className={`${styles["commentReplies"]}`} >
                </div>
            </div>
        </div>
    ) 
}

export default CommentContainer 