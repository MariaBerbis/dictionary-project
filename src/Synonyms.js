import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyns">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="text-capitalize Synonyms">
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
