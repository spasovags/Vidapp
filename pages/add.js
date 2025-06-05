import styles from '../styles/Add.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles, faDownLeftAndUpRightToCenter, faClockRotateLeft, faBolt, faXmark, faRepeat } from '@fortawesome/free-solid-svg-icons'


export default function Add() {
    
  const idAddVideo ="idAddVideo";
  const recordVideo = "recordVideo";
  let isPlaying = false;
  
  const autoPlayVid = async () => {
    const vid = document.querySelector(`#${idAddVideo}`); 
    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    vid.srcObject = stream;
    vid.play();
};

const pauseVideo = () => {
  const vid = document.querySelector(`#${idAddVideo}`); 
                                      
      vid.pause(); 
  }
const playVideo = () => {
    const vid = document.querySelector(`#${idAddVideo}`); 
                                        
        vid.play(); 
    }

autoPlayVid();

  return (    
    <div className={`${styles["addContainer"]}`}>
      <div className={`${styles["addVidContainer"]}`}>
       <div className={`${styles["optionsContainer"]}`}>
         <div className={`${styles["otionsRel"]}`}>
          <div className={`${styles["optionsCloseTop"]}`}>     
           <Link className={`${styles["linkHomePost"]}`} href="/">
             <FontAwesomeIcon icon={faXmark} />             
           </Link>  
            <button 
              className={`${styles["addSoundToPost"]}`} >
              <span class="material-symbols-outlined">music_note</span> Add sound
            </button>   
            <button 
              className={`${styles["switchCamera"]}`} >
              <FontAwesomeIcon icon={faRepeat} />
            </button>
          </div>
          <div className={`${styles["cameraOptions"]}`}>     
             <button 
              className={`${styles["cameraOption"]}`} >
              <FontAwesomeIcon icon={faBolt} />            
            </button>   
            <button 
              className={`${styles["cameraOption"]}`} >
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </button>
          
            <button 
              className={`${styles["cameraOption"]}`} >
              <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
            </button>   
            <button 
              className={`${styles["cameraOption"]}`} >
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </button>
          </div>
          <div className={`${styles["filterOptions"]}`}>     
             <button 
              className={`${styles["filterOption"]}`} >
              <FontAwesomeIcon icon={faBolt} />            
            </button>   
            <button 
              className={`${styles["filterOption"]}`} >
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </button>
          
            <button 
              className={`${styles["filterOption"]}`} >
              <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
            </button>   
            <button 
              className={`${styles["filterOption"]}`} >
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </button>
          </div>
         </div>
       </div>
       <video 
        className={`${styles["addVideoBackg"]}`}
        id={idAddVideo} 
        autoPlay>
       </video>


       <div >
        <button onClick={pauseVideo}>pause</button>
        <button onClick={playVideo}>play</button>

       </div>
      </div>
    </div>
    )
  }