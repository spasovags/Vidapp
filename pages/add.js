import styles from '../styles/Add.module.css'


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