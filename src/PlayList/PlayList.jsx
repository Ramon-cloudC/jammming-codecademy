
import { useState } from "react";
import styles from "./PlayList.module.css"

function PlayList(props){

    const trackToPlaylist = props.addedTracks
    
    return(
        <div className={styles.container}>
            <h3 className={styles.h3}>Your Personal Playlist</h3>
            <input className={styles.input} type="text" placeholder="Name Your Playlist Here"/>
            <ul>
                {trackToPlaylist.map((addedTracks)=> <li className={styles.list} key={addedTracks.id}>{addedTracks.name} - {addedTracks.artist}<button className={styles.button} onClick={()=>props.removeTracks(addedTracks)}>-</button></li>)}
            </ul>
            <button className={styles.saveToSPotify}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default PlayList;