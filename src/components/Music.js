import React, { useReducer } from "react";
import { addPosterAC } from "../App";
import Album from "./Album";
import style from "./css/Music.module.css"
import {useContext} from "react"


const Music = (props) => {
 
  
  if (props.music.length === 0) {
    return <div>lol</div>
  } else {
      
     
    return (
      <div>
        {/* {props.music.slice(0,5).map((music, index) => (<Album key={`${index}-${music.name}`} music={music} dispatch={props.dispatch} />))} */}
        <Album  music={props.music[0]} dispatch={props.dispatch}/>
        <Album music={props.music[1]} dispatch={props.dispatch}/>
        <Album music={props.music[2]} dispatch={props.dispatch}/>
        <Album music={props.music[3]} dispatch={props.dispatch}/>
        <Album music={props.music[4]} dispatch={props.dispatch}/>
      </div>
    )
  }
};


export default Music