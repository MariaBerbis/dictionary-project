import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1 className="text-capitalize word">{props.results.word}</h1>
          <p className="phonetic">/{props.results.phonetic}/</p>
        </section>
        {props.results.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
