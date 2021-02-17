import React from "react"
import style from "./css/Poster.module.css"
import { useReducer } from "react"

let POSTER_DEFAULT = "https://www.bartender.com.ua/wp-content/themes/bartender/images/default-thumbnail.jpg"

const initialState = {
        poster: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_POSTER": 
            return {
                ...state,
                poster: action.kartinka
            }
        }
    }

const Poster1 = (props) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const { poster } = state
if (props.poster == null) {
    return (
        <div className={style.box}>
            <img src={POSTER_DEFAULT}/>
        </div>
    )
} else if (props.editMode === true) {
    dispatch({type: "ADD_POSTER", kartinka: props.poster})
    return (
        <div className={style.box}>
            <img src={poster}/>
        </div>
    )
} else {
    return (
        <div className={style.box}>
            <img src={"https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"}/>
        </div>
        )
    
}

}

export default Poster1