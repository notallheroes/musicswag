import React from "react"
import style from "./css/Music.module.css"



const Album = (props) => {
  
    
    let cover = props.music.image[1]["#text"]
    let coverFull = props.music.image[3]["#text"]
    const addToBox = () => {
      props.dispatch({type: "ADD_COVER", coverFull})
    }
    return (
        
        <div onClick={addToBox}  className={style.music}>
          <img
            className={style.poster}
            src={cover}
          />
          <div className={style.description}>
            <div className={style.name}>{props.music.name}</div>
            <div className={style.artist}>{props.music.artist}</div>
          </div>
          </div>
    )
}

export default Album