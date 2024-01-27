import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}...`);
  }

  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeyWord}
          placeholder="Introduce a word..."
        />
        <input type="submit" />
      </form>
    </div>
  );
}
