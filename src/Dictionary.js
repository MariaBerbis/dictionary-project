import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=5399eea49f9baa9t4a0de908084b4of2`;
    axios.get(apiUrl).then(handResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeyword}
          placeholder="Introduce a word..."
        />
        <input type="submit" />
      </form>
    </div>
  );
}
