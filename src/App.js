import React, { useEffect, useReducer, useContext } from "react"
import * as axios from "axios"
import './App.css';
import Music from './components/Music';
import Search from './components/Search';
import Header from "./components/Header"

import Poster from "./components/Poster";



const MUSIC_API_URL = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=&api_key=40912a147e8e5c3f25851fca0618d4fb&format=json";


const initialState = {
  loading: false,
  music: [],
  errorMessage: null,
  poster: null,
  editMode: {a: true, b: false, c: false, d: false}
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MUSIC_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MUSIC_SUCCESS":
      return {
        ...state,
        loading: false,
        music: action.payload
      };
    case "SEARCH_MUSIC_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case "SEARCH_MUSIC_EMPTY":
      return {
        ...state,
        music: [],
        loading: false
      }
    case "ADD_COVER": 
      return {
        ...state,
        poster: action.coverFull
      }
      case "ADD_ACTIVE": 
      return {
        ...state,
        editMode: action.editMode
      }
    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*     useEffect(() => {
      
          axios.get(MUSIC_API_URL)
              .then(response => {
          
              dispatch({
                  type: "SEARCH_MUSIC_SUCCESS",
                  payload: response.data.results.albummatches.album
            });
          });
      }, []); */

  const search = searchValue => {

    dispatch({
      type: "SEARCH_MUSIC_REQUEST"
    });
    if (searchValue == "") {
      dispatch({ type: "SEARCH_MUSIC_EMPTY" })
    } else {
      axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchValue}&api_key=40912a147e8e5c3f25851fca0618d4fb&format=json`)
        .then(response => {
          if (response.data.results.albummatches.album != []) {
            dispatch({
              type: "SEARCH_MUSIC_SUCCESS",
              payload: response.data.results.albummatches.album
            });
          } else {
            dispatch({
              type: "SEARCH_MUSIC_FAILURE",
              error: "ошебка!"
            });
          }
        });
    };
  }

  const { music, errorMessage, loading, poster, editMode } = state;
  
  let editMode1 = {
    a: true, b: false, c: false, d: false
  }
  let editMode2 = {
    a: false, b: true, c: false, d: false
  }
  let editMode3 = {
    a: false, b: false, c: true, d: false
  }
  let editMode4 = {
    a: false, b: false, c: false, d: true
  }

  

  return (
    
    <div className="App">
      <Header />
      <Search search={search} />
      <div className="music">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (<Music music={music} dispatch={dispatch} />)} </div>
        <div className="posterContainer">
          <div onClick={() => dispatch({type:"ADD_ACTIVE", editMode: editMode1 })} className={editMode.a ? ("poster active") : ("poster") } ><Poster editMode={editMode.a}  poster={poster} /></div>
          <div onClick={() => dispatch({type:"ADD_ACTIVE", editMode: editMode2 })}  className={editMode.b ? ("poster active") : ("poster") }><Poster editMode={editMode.b} poster={poster} /></div>
          <div onClick={() => dispatch({type:"ADD_ACTIVE", editMode: editMode3 })}  className={editMode.c ? ("poster active") : ("poster") }><Poster editMode={editMode.c}  poster={poster} /></div>
          <div onClick={() => dispatch({type:"ADD_ACTIVE", editMode: editMode4 })}  className={editMode.d ? ("poster active") : ("poster") }><Poster editMode={editMode.d}  poster={poster} /></div>
          
        </div>
    </div>
    
  )
}

export default App;
