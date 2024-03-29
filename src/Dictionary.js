import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=5399eea49f9baa9t4a0de908084b4of2`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=5399eea49f9baa9t4a0de908084b4of2`;
    axios.get(imgApiUrl).then(handleImagesResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeyword}
            placeholder="Introduce a word..."
          />
        </form>
        <div className="hint">
          Suggested searchs: Sky, philosophy, plant, sunset...{" "}
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
//**component - property name -property value *
