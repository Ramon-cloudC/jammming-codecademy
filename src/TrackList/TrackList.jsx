import styles from "./TrackList.module.css"

function TrackList(props) {

  const trackToRender = props.tracks

   return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Results</h3>
      <ul className={styles.unordList}>
        {trackToRender.map((track) => <li className={styles.list}key={track.id}>{track.name} - ({track.artist})<button className={styles.button} onClick={()=>props.onAddTracks(track)}>+</button></li>)}
      </ul>
    </div>
   )
  }
  
  export default TrackList;
  