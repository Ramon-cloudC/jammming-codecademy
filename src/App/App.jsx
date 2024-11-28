import { useState } from "react";
import "./App.css"
import Banner from "../Banner/Banner";
import TrackList from "../TrackList/TrackList";
import PlayList from "../PlayList/PlayList";

function App() {
  // Initializing the search results state
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState(""); // To hold the user input query

  // State to save the Tracklist and send it to Playlist
  const [trackToAdd, setTrackToAdd] = useState([]);

  // State that holds the removed tracks (optional)
  const [trackToRemove, setTrackToRemove] = useState([]);

  // List of all tracks
  const TRACKS = [
    { name: "Bad Dreams", artist: "Teddy Swims", album: "The Theory", id: 25567 },
    { name: "Too Sweet", artist: "Hozier", album: "Running and Chilling", id: 45503 },
    { name: "Break'n a Sweat", artist: "Skrillex", album: "Masterpiece", id: 58933 }
  ];

  // Function to handle the search
  function handleSearch(query) {
    // Filter tracks based on name or artist matching the query
    const filteredTracks = TRACKS.filter(
      (track) =>
        track.name.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredTracks); // Update the search results state
  }

  // Function to pass tracks
  function handleAddTracks(addTrack) {
    // Check if the track is already in the playlist
    if (!trackToAdd.some((track) => track.id === addTrack.id)) {
      setTrackToAdd([...trackToAdd, addTrack]); // Add track if not already in the playlist
    } else {
      alert("This track is already in your playlist!"); // Alert if track is already in the playlist
    }
  }

  // Function to remove tracks
  function handleRemoveTracks(removeTrack) {
    // Remove track from playlist
    setTrackToAdd(trackToAdd.filter(track => track.id !== removeTrack.id));
  }

  return (
    <div className="main">
      {/* Pass handleSearch function to Banner */}
      <Banner handleClick={handleSearch} /> 
      
      {/* Pass searchResults to TrackList */}
      <TrackList tracks={searchResults} onAddTracks={handleAddTracks} />
      {/* Pass addedTracks and removeTracks to PlayList */}
      <PlayList addedTracks={trackToAdd} removeTracks={handleRemoveTracks} />
    </div>
  );
}

export default App;

