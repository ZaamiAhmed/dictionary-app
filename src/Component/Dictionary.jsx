import React, { useState } from "react";
import axios from "axios";
import './dictionary.css';
import Results from "./Results";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleShecodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // dictionary API
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(api).then(handleDictionaryResponse);

    // shecodes API
    let shecodesApiKey = "3b95otea77f9a4894d538e9bd2a44800";
    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}&per_page=4`;
    axios.get(shecodesApiUrl).then(handleShecodesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search(); 
  }

  if (loaded) {
    return (
      <>
        <div className="dictionary">
          <h2>English Dictionary</h2>
          <form onSubmit={handleSubmit}>
            <section className="search-container">
              <input
                type="search"
                placeholder="type a word"
                autoFocus={true}
                onChange={handleChange}
              />
              <i className="fa-solid fa-magnifying-glass" onClick={handleSubmit}></i>
            </section>
          </form>
        </div>

        <Results result={results} />
        <Photos photos={photos} />
      </>
    );
  } else {
    load();
    return "Loading...";
  }
}