

const SEARCH_ALBUM_SUCCESS = "SEARCH_ALBUM_SUCCESS"

const initialState = {
    albums: {
        image: null
    }
  };

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ALBUM_SUCCESS: { 
            return {
                ...state,
                albums: action.album
            }
    }
        default: return state;
    }
}




export const getAlbumActionCreator = (album)  => ({type: SEARCH_ALBUM_SUCCESS, album})

export default albumReducer