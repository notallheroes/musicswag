

import {connect} from "react-redux"
import Music from "./Music"


let mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}


const MusicContainer = connect(mapStateToProps)(Music)

export default MusicContainer;