import { useState } from "react";
import styles from "./Banner.module.css";


function Banner(props) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Pass query to the parent component's handleSearch
    props.handleClick(query);
    setQuery(""); // Reset the input field
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Jammming</h1>
      <p className={styles.paragraph}>Track and manage your all-time favorite songs in one place</p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Song Name or Artist"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.button}type="submit">Search</button>
      </form>
    </div>
  );
}

export default Banner;
