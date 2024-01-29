import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="Synonyns">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="text-capitalize">
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
