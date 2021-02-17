import * as axios from "axios" 


const instance = axios.create({
    baseURL: "http://ws.audioscrobbler.com/2.0/"
})


export const albumSearchAPI = (searchValue) => {
    return instance.get(`?method=album.search&album=${searchValue}&api_key=40912a147e8e5c3f25851fca0618d4fb&format=json`)
}