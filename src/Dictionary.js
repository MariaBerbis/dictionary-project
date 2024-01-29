import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=5399eea49f9baa9t4a0de908084b4of2`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
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
    </div>
  );
}
//**component - property name -property value *
